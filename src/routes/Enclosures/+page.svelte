<script>
    import Footer from "../../componets/Footer.svelte"
    import ModalForm from "../../componets/ModalForm.svelte";
    import AddnewButton from "../../componets/AddNewButton.svelte";
    import { onMount } from "svelte"
    import { jwtDecode } from "jwt-decode";
    let showModal = false
    let User    
    let Enclosures = {}
    const toggleModal = () =>{
        showModal = !showModal
    }
    onMount(() => {
        User = jwtDecode(localStorage.getItem("Token"))
        console.log(User.Role)
})
</script>
<ModalForm modalType="AddEnclosure", showModal={showModal} ></ModalForm>
<div class="Body">
    {#each Enclosures as Enclosures}  
        <ListeCompGrid Data={ennclosure} />
    {/each}
    {#if User?.role === "Admin" || User?.role == "ZooKeeper"}  
        <AddnewButton  on:click={toggleModal} img="Fence"/>
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