
<script src="">
  import { json } from "@sveltejs/kit"
  import UserProfil from "../../componets/UserProfil.svelte"
  import Footer from "../../componets/Footer.svelte"
  import { onMount } from "svelte"


    let user
    onMount(() => {
        user = JSON.parse(localStorage.getItem("user"))
        console.log(user)

    })
</script>

<div>
    <UserProfil></UserProfil>
    <Footer />
</div>

<style>
    .main{
        display: flex;
        flex-direction: column;
        min-height: 90vh;
    }
</style>