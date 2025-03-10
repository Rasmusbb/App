<script>
    import { jwtDecode } from "jwt-decode";
    import API from '/src/Logic/API.js';
    import { createEventDispatcher } from 'svelte';
    import { goto } from "$app/navigation";
    import NewPassword from './NewPassword.svelte';
	let Data = {}
    let changedDefault = false
    let User = {}
    let loginfailed = false 
    const dispatch = createEventDispatcher();

    function ToogleLogin() {
        goto(window.location.pathname, { replaceState: true });
	}
	async function SubmitLogin(event) {
		event.preventDefault()
        let Token = await API["Login"](Data)    
            try {
                localStorage.setItem("Token", Token);
                User = jwtDecode(Token);
                console.log(User)
                if(User.changeDefault == "False"){
                    changedDefault = true;
                    console.log("You should change password")
                }   
                else{
                    dispatch("submit")
                } 
            } catch(error){
                console.log(error)
			    loginfailed = true;
            }
  	}

    async function SubmitPas (event) {
        event.preventDefault()
        let Token = await API["Login"](Data)
        localStorage.setItem("Token", Token);
        dispatch("submit");
    }
</script>
{#if changedDefault == false}
    <form on:submit={SubmitLogin}>
        <h1>Login</h1>
        <label for="text">E-mail:</label>
        <input bind:value={Data.email} type="text">
        <label for="password">Password:</label>
        <input bind:value={Data.password} type="password">
        {#if loginfailed == true}
            <p style="color: red;">Wrong password or Email</p>
        {/if}
        <button type="submit" class="submit-btn">Login</button>
    </form>
{:else}
    <NewPassword on:submit={SubmitPas}></NewPassword>
{/if}




<style>
form{
    display: flex;
    flex-direction: column;
    gap: 15px; /* Adds space between form elements */
    width: 100%; /* Uses more space inside modal */
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 10px;
}

label {
    font-size: 16px;
    font-weight: bold;
    max-width: 90%;
}

/* Inputs and Select */
input{
    width: 90%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}

/* Submit Button */
.submit-btn {
    padding: 10px;
    border: none;
    background-color: #2ecc71;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
}
</style>