<script>
    import Footer from "../../componets/Footer.svelte";
    import PictureList from "$lib/PictureList";
    import AddNew from "../../componets/AddNewButton.svelte";
    import AddnewButton from '../../componets/AddnewButton.svelte';
    import NewAnimal from "../../componets/NewAnimal.svelte";
    import { onMount } from "svelte"
    import { jwtDecode } from "jwt-decode";
    let showModal
    let ListHeadData = {
                Value1: "Navn",
                Value2: "Rolle",
                Value3: "Telefon",
                Value4: "fokus"
    }

    const toggleModal = () =>{
        showModal = !showModal
        console.log("Hello")
    }

    let User    
    async function GetAnimals(){
    }
    onMount(() => {
        User = jwtDecode(localStorage.getItem("Token"))
})
</script>
    <NewAnimal showModal={showModal}></NewAnimal>
<div class="Body">
    {#if User?.Role === "Admin" || User?.Role == "ZooKeeper"}  
        <button on:click={toggleModal}>Hello</button>
        <AddnewButton on:click={toggleModal} img="AddAnimal"/>
    {/if}   
</div>
<Footer />

<style>
    .Body {
        display: flex;
        flex-direction: column;
        min-height: 90vh;
        max-height: 90vh;
    }
    .NewAnimal{
        margin-top: 1em;
        margin-bottom: 1em;
        display: flex;
        border-color: black;
        border-style: solid;
        justify-content: center;
    }
</style>