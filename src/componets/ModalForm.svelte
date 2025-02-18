
<script>
    import { AddAnimal } from '/src/Logic/API.js';
    export let showModal = false
    let animal = {}
    let status = ""
    async function SubmitAnimal(event) {
        event.preventDefault();
        animal.status = status;
        console.log(animal)
        AddAnimal(animal);
  	}

    


</script>
{#if showModal}
    <div class="Modal">
        <button class="close-btn" on:click={() => showModal = !showModal}>✖</button>
        <form on:submit={SubmitAnimal} class="form-container">
            <h2>Add Animal</h2>

            <label for="physical-id">Fysisk ID:</label>
            <input bind:value={animal.physicalID} id="physical-id" type="text">

            <label for="name">Navn:</label>
            <input bind:value={animal.name} id="name" type="text">

            <label for="Origin">Oprindelse:</label>
            <input bind:value={animal.origan} id="Origin" type="text">

            <label for="birthday">Fødselsdag:</label>
            <input bind:value={animal.birthday} id="birthday" type="date">
            
            <label for="species">Species:</label>
            <input bind:value={animal.species} id="species" type="text">

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
    </div>
{/if}

<style>
/* Modal Styling */
.Modal {
    background-color: rgba(162, 166, 155);
    position: fixed;
    border-radius: 10px;
    width: 80vw;
    height: 90vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 10px;
}

/* Close Button Styling */
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
}

/* Form Styling */
.form-container {
    display: flex;
    flex-direction: column;
    gap: 15px; /* Adds space between form elements */
    width: 100%; /* Uses more space inside modal */
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 10px;
}

/* Labels */
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
