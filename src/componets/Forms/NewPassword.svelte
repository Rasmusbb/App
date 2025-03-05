<script>
    import { jwtDecode } from "jwt-decode";
    import API from '/src/Logic/API.js';
    import { createEventDispatcher } from 'svelte';
	let Data = {}
    let passwordFailed = false 
    let RepeatedPassword = ""
    const dispatch = createEventDispatcher();
	async function SubmitLogin(event) {
		event.preventDefault()
        if (Data.password == RepeatedPassword) {
            let Token = localStorage.getItem("Token");
            Data.UserID = jwtDecode(Token).userID
            await API["ChangePassword"](Data,Token)
            Data.Email = jwtDecode(Token).email
            Token = await API["Login"](Data)
            localStorage.setItem("Token", Token);
            dispatch("submit");
        } else{
            passwordFailed = true
        }
  	}
</script>

<form on:submit={SubmitLogin}>
    <h1>Nyt Kodeord</h1>
    <label for="password">Nyt Kodeord:</label>
    <input bind:value={Data.password} type="password">

    <label for="password">Gentag Kodeord:</label>
    <input bind:value={RepeatedPassword} type="password">
    {#if passwordFailed == true}
        <p style="color: red;">Kodeordet var ikke det samme</p>
    {/if}
    <button type="submit" class="submit-btn">Ændre Kodeord</button>
</form>



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