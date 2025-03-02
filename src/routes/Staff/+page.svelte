<script>
    import { onMount} from 'svelte';
    import { goto } from '$app/navigation';
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
                Value2: "Fokus",
                Value3: "Telefon",
                Value4: "Rolle"
    }

    const toggleModal = () =>{
        showModal = !showModal
    }
    let User    
    let Users

    function formatName(fullName) {
        let parts = fullName.split(" "); 
        let firstName = parts[0]; 
        let lastInitial = parts.length > 1 ? parts[1][0] : ""; 
        return `${firstName} ${lastInitial}`;
    }

    async function GetUsers(){
        let Token = localStorage.getItem("Token")
        if(API["JWTVaild"](Token)){
            Users = await API["GetAllUsers"](Token)
            console.log(200);
            Users.forEach(User => {
                User.name = formatName(User.name)
            });
            return
        }
        goto("/")
    }

    onMount(() => {
        GetUsers()
        User = jwtDecode(localStorage.getItem("Token"))
})

    
</script>


<div>
    <div class="Staff">
        <ModalForm modalType="AddUser", showModal={showModal}></ModalForm>
        <ListHeader ListHead={ListHeadData} />
        {#if User != null}
            {#each Users as user}  
                <ListeCompGrid Data={{ name: user.name, Mainarea: user.mainArea, Phone: user.phone, Role: user.role}} />
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
