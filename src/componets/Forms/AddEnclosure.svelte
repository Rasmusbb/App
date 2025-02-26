<script>
    import API from '../../Logic/API.js';
    export let Data = {}
    let status = ""
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    async function SubmitData(event) {
        event.preventDefault()
        console.log(Data)
        API["AddEnclosure"](Data,localStorage.getItem("Token"))
        dispatch("submit")
  	}
</script>

<form on:submit={SubmitData}>
    <h2>Tilføj en indhegning</h2>

    <label for="name">Navn:</label>
    <input bind:value={Data.name} id="name" type="text">
    <button type="submit" class="submit-btn">Tilføjk</button>
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