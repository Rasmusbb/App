<script>
    import API from '../../Logic/API.js';
    export let Data = {}
    let status = ""
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    async function SubmitData(event) {
		event.preventDefault()
        dispatch("submit",Data);
    }
</script>

<form on:submit={SubmitData}>
    <label for="name">Navn:</label>
    <input bind:value={Data.enclosurename} id="name" type="text">
    <label for="size">størrelse(m²):</label>
    <input bind:value={Data.size} id="name" type="text">
    <button type="submit" class="submit-btn">Tilføj</button>
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