<script>
    import Footer from "../../componets/Footer.svelte"
    import AddnewButton from "../../componets/AddNewButton.svelte";
    import { onMount } from "svelte"
    import { jwtDecode } from "jwt-decode";



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
<div class="Body">
    {#if User?.Role === "Admin" || User?.Role == "ZooKeeper"}  
        <AddnewButton img="Fence"/>
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