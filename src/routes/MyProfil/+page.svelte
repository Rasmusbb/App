
<script>
    import { jwtDecode } from "jwt-decode";
    import { json } from "@sveltejs/kit"
    import UserProfil from "../../componets/UserProfil.svelte"
    import Footer from "../../componets/Footer.svelte"
    import { onMount } from "svelte"


    let User
    onMount(() => {
        User = jwtDecode(localStorage.getItem("Token"))
    })
</script>

<div class="main">
    {#if User != null}
        <UserProfil  UserProfilData={User}></UserProfil>
    {/if}
    <Footer />
</div>

<style>
    .main{
        display: flex;
        flex-direction: column;
        min-height: 90vh;
    }
</style>