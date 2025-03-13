<script>
    import { createEventDispatcher } from 'svelte';
    import PictureList from '$lib/PictureList.js';
    const dispatch = createEventDispatcher();
    export let edit = false
    export let Data = ""
    export let messureingunit = ""
    export let Name
    export let Type = "Input"
    export let Options = []
    function onEdited(){
        Data.origin = Name
        dispatch("submit",Data)

    }

</script>


<form class="button-container">
    {#if edit}
        {#if Type == "Input"}
            <input Type={Type} class="button" bind:value={Data} on:input={() => onEdited()}/>
        {/if}
        {#if Type == "Selector"}
           <select name="" class="button" bind:value={Data} on:change={() => onEdited()}>
            {#each Options as option}
                <option value={option}>{option.name}</option>
            {/each}
           </select>
        {/if}        
    {:else}
    <button on:click={edit = true} class="button">{Name}: {Data} {messureingunit}</button>
    {/if}
    <button type="button" on:click={() => copyLink(ProfilData.age)} class="copy-button">
        <img src={PictureList["Copy"]} title="Kopier"  alt="Copy Icon" />
    </button>
</form>

<style>
    .button-container {
        display: flex;
        align-items: center;
        gap: 0.5em; 
    }
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.8em;
        width: 100%;
        font-size: 1em;
        border: none;
        border-radius: 8px;
        background: #007bff;
        color: white;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    .copy-button{
        background-color: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    img {
		height: 1em;
        width: 1em;
	}
</style>