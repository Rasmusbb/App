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
    <h2>Add Animal</h2>

    <label for="physical-id">Fysisk ID:</label>
    <input bind:value={Data.physicalID} id="physical-id" type="text">

    <label for="name">Navn:</label>
    <input bind:value={Data.name} id="name" type="text">
    <label for="Gender">Køn:</label>
    <select id="Gender" bind:value={Data.gender} type="text">   
        <option value="Male">Han</option>
        <option value="Female">Hun</option>
        <option value="Both">hermafrodi</option>
    </select>
    <label for="Origin">Oprindelse:</label>
    <input bind:value={Data.origan} id="Origin" type="text">

    <label for="birthday">Fødselsdag:</label>
    <input bind:value={Data.birthday} id="birthday" type="date">
    
    <label for="species">Species:</label>
    <input bind:value={Data.species} id="species" type="text">

    <label for="status">Status:</label>
    <select id="status" bind:value={status} name="status">
        <option value="Healthy">Sund og rask</option>
        <option value="Sick">syg</option>
        <option value="Dead">Død</option>
    </select>
    {#if status == "Dead"}
        <label for="deadday">DødsDato:</label>
        <input id="deadday" type="date">
    {/if}
    <button type="submit" class="submit-btn">Add Animal</button>
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
input, select {
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