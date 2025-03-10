
<script>
    import { jwtDecode } from "jwt-decode";
    import { json } from "@sveltejs/kit"
    import UserProfil from "../../componets/UserProfil.svelte"
    import Footer from "../../componets/Footer.svelte"
    import { onMount } from "svelte"
    import ModalForm from "../../componets/ModalForm.svelte";
    import API from "../../Logic/API.js"
    let showLogin = false
    let User
    async function Startup(){
        showLogin = false
        try {
            User = jwtDecode(localStorage.getItem("Token"))
        } catch (error) {
            console.log(error)
            showLogin = true
        }
    }

    onMount(() => {
        Startup()
    })
</script>
<ModalForm on:submit={Startup} modalType="Login", showModal={showLogin}></ModalForm>
<div class="main">
    {#if User != null}
        <UserProfil  UserProfilData={User}></UserProfil>
    {/if}
</div>

<style>
    .main{
        display: flex;
        flex-direction: column;
        min-height: 90vh;
        max-height: 90vh;
    }
</style>