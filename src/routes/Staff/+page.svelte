<script>
    import { onMount} from 'svelte';
    import { jwtDecode } from "jwt-decode";
    import PictureList from '$lib/PictureList.js';
    import Footer from "../../componets/Footer.svelte"
    import ListeComp from "../../componets/ListeCompGrid.svelte"
    import AddnewButton from '../../componets/AddnewButton.svelte';
    import ListHeader from "../../componets/ListHeader.svelte";
    import { GetAllUsers } from '/src/Logic/API.js';
    import ListeCompGrid from '../../componets/ListeCompGrid.svelte';
    import ModalForm from "../../componets/ModalForm.svelte";
    let showModal = false;
    let ListHeadData = {
                Name: "Navn",
                Role: "Rolle",
                phone: "Telefon",
                mainArea: "fokus"
    }
    const toggleModal = () =>{
        showModal = !showModal
        console.log("Hello")
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
            <ModalForm showModal={showModal}></ModalForm>
            <ListHeader ListHead={ListHeadData} />
            {#each Users as user}  
                <ListeCompGrid Data={user} />
            {/each}
            {#if User?.Role === "Admin"}  
                <AddnewButton on:click={toggleModal} img="AddUser"></AddnewButton>
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
</style>
