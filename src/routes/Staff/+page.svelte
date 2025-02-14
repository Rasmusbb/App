<script>
    import { onMount} from 'svelte';
    import { jwtDecode } from "jwt-decode";
    import PictureList from '$lib/PictureList.js';
    import Footer from "../../componets/Footer.svelte"
    import ListeComp from "../../componets/ListeCompGrid.svelte"
    import ListHeader from "../../componets/ListHeader.svelte";
    import { GetAllUsers } from '/src/Logic/API.js';
    import ListeCompGrid from '../../componets/ListeCompGrid.svelte';
    import AddNew from '../../componets/AddNew.svelte';
    let showModal = false;
    let ListHeadData = {
                Name: "Navn",
                Role: "Rolle",
                phone: "Telefon",
                mainArea: "fokus"
    }
    function test() {
        showModal = true
        console.log(showModal)
    }
    let User    
    let Users
    async function GetUsers(){
        Users = await GetAllUsers()
    }
    onMount(() => {
        GetUsers()
        User = jwtDecode(localStorage.getItem("Token"))
        console.log(User.Role)
})

    
</script>


<div>
    <div class="Staff">
        {#if User != null}
            {#if showModal}
                <AddNew></AddNew>
            {:else}
                <ListHeader ListHead={ListHeadData} />
    
                {#each Users as user}  
                    <ListeCompGrid Data={user} />
                {/each}
    
                {#if User?.Role === "Admin"}  
                    <button on:click={test} class="NewUser">
                        <img src={PictureList.AddUser} alt="Add User">
                    </button>
                {/if}
            {/if}
        {/if}
    </div>    
    <Footer />
</div>


<style>
    .Staff {
            display: flex;
            flex-direction: column;
            min-height: 90vh;
            max-height: 90vh;
    }

    .NewUser{
        margin-top: 1em;
        margin-bottom: 1em;
        display: flex;
        border-color: black;
        border-style: solid;
        justify-content: center;
    }
	img {
		width: 5em;
		height: 2em;
		object-fit: contain;
	}
</style>
