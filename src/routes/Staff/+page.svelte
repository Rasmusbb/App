<script>
    import { onMount} from 'svelte';
    import { jwtDecode } from "jwt-decode";
    import PictureList from '$lib/PictureList.js';
    import Footer from "../../componets/Footer.svelte"
    import ListeComp from "../../componets/ListeCompGrid.svelte"
    import AddnewButton from '../../componets/AddnewButton.svelte';
    import ListHeader from "../../componets/ListHeader.svelte";
    import API from '/src/Logic/API.js';
    import ListeCompGrid from '../../componets/ListeCompGrid.svelte';
    import ModalForm from "../../componets/ModalForm.svelte";
    let showModal = false;
    let ListHeadData = {
                Value1: "Navn",
                Value2: "Rolle",
                Value3: "Telefon",
                Value4: "fokus"
    }
    const toggleModal = () =>{
        showModal = !showModal
    }
    let User    
    let Users
    async function GetUsers(){
        Users = await API["GetAllUsers"](localStorage.getItem("Token"))
        console.log(localStorage.getItem("Token"))
    }
    onMount(() => {
        GetUsers()
        User = jwtDecode(localStorage.getItem("Token"))
        console.log(User.Role)
})

    
</script>


<div>
    <div class="Staff">
        <ModalForm modalType="AddUser", showModal={showModal}></ModalForm>
        <ListHeader ListHead={ListHeadData} />
        {#if User != null}
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
