<script>
    import API from '/src/Logic/API.js';
    import { onMount } from 'svelte';
    export let Data = {}
    let Enclosures = []
    let SelEnclosure = ""
    import { createEventDispatcher } from 'svelte';
  import UserProfil from '../UserProfil.svelte';
    const dispatch = createEventDispatcher();
    async function SubmitData(event) {
		event.preventDefault()
        dispatch("submit");
    }
    async function GetALLUserEnclosures()
    {
        Enclosures = await API["GetUserEnclosures"](UserProfilData.userID,true,localStorage.getItem("Token"))
    }
    onMount(() => {

        console.log(Enclosures[0])
    })

</script>

<form on:submit={SubmitData}>
    <h2>Tilføj Anlæg</h2>
    <label for="Enclosures">Enclosures:</label>
    <select bind:value={SelEnclosure}>
        {#each Enclosures as Enclosure}
            <option value={Enclosure}>{Enclosure.EnclosureName}</option>
        {/each}
    </select>
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