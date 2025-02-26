<script>
    import Footer from "../../componets/Footer.svelte";
    import PictureList from "$lib/PictureList";
    import AddNew from "../../componets/AddNewButton.svelte";
    import AddnewButton from '../../componets/AddnewButton.svelte';
    import ModalForm from "../../componets/ModalForm.svelte";
    import { onMount } from "svelte"
    import { jwtDecode } from "jwt-decode";
    import API from "../../Logic/API.js"
    import ListHeader from "../../componets/ListHeader.svelte";
    let showModal
    let ListHeadData = {
                Value1: "Navn",
    }
    const toggleModal = () =>{
        showModal = !showModal
    }

    let User    
    onMount(() => {
        User = jwtDecode(localStorage.getItem("Token"))

})
</script>
    <ModalForm modalType="AddAnimal", showModal={showModal} ></ModalForm>
    <ListHeader ListHead={ListHeadData} />
<div class="Body">
    {#if User?.Role === "Admin" || User?.Role == "ZooKeeper"}
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
</style>