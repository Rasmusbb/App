<script>
    import PictureList from '$lib/PictureList.js';
    import { onMount } from 'svelte';
    export let ProfilData = {}
    export let User = {}
    let canEdit = false
    let editProfilData = {}
    let showedit = {}
    let EditedProfil = {}

    function copyLink(value) {
        navigator.clipboard.writeText(value);
    }

    function Showedit(editbutton){
        if (User.role == "ZooKeeper" || User.role == "Admin"){
            switch(editbutton){
                case "physicalID":
                    showedit.physicalID = true
                break;
                case "age":
                 showedit.age = true
                break;

                case "gender":
                 showedit.gender = true
                break;

                case "specie":
                    showedit.specie = true
                break;
            }
            console.log("Edited allowed")
        }else{
            console.log("Edited not allowed")
        }
    }
    function calculateAge(birthday){
        const birthDate = new Date(birthday);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        return age;
    }

    function Startup(){
        switch(ProfilData.gender){
            case "Male":
                ProfilData.gender = "Han"
            break;
            case "Female":
                ProfilData.gender = "Hun"
            break;
            
            default:
                ProfilData.gender = "Intet køn"
            break;
        }
        if (User.role == "ZooKeeper" || User.role == "Admin"){
            canEdit = true
        }
        ProfilData.age = calculateAge(ProfilData.birthday)
        
    }
    onMount(() => {
        console.log(ProfilData)
        Startup()
        editProfilData = ProfilData
    })
</script>


<div class="Header">
    <h2>Dyrets Oplysninger</h2>
</div>
<div class="info">
    <div class="button-container">
        {#if showedit.physicalID}
            <input class="button" bind:value={ProfilData.physicalID}/>
        {:else}
            <button on:click={Showedit("physicalID")} class="button">FysikID: {ProfilData.physicalID}</button>
        {/if}
            <button type="button" on:click={() => copyLink(ProfilData.physicalID)} class="copy-button">
                <img src={PictureList["Copy"]} title="Kopier"  alt="Copy Icon" />
            </button>
    </div>
    <div class="button-container">
        <button on:click={() => copyLink(ProfilData.age)} class="button">Alder: {ProfilData.age} år</button>
        <button type="button" class="copy-button">
            <img src={PictureList["Copy"]} title="Kopier" alt="Copy Icon" />
        </button>
    </div>
    <div class="button-container">
        <button  class="button">Føselsdag: {ProfilData.birthday.split("T")[0]}</button>
        <button type="button" class="copy-button">
            <img src={PictureList["Copy"]} title="Kopier" alt="Copy Icon" />
        </button>
    </div>
    <div class="button-container">
        <button  class="button">Køn: {ProfilData.gender}</button>
        <button type="button" class="copy-button">
            <img src={PictureList["Copy"]} title="Kopier" alt="Copy Icon" />
        </button>
    </div>
    <div class="button-container">
        <button class="button">Art: {ProfilData.specie}</button>
        <button type="button" class="copy-button">
            <img src={PictureList["Copy"]} title="Kopier" alt="Copy Icon" />
        </button>
    
    </div>
    <div class="button-container">
        <button on:click={() => copyLink(ProfilData.specie)} class="button">Anlæg: {ProfilData.enclosure}</button>
        <button type="button" class="copy-button">
            <img src={PictureList["Copy"]} title="Kopier" alt="Copy Icon" />
        </button>
    </div>
</div>

<style>
    .Header{
        display: flex;
        width: 100%;
    }

    .contact-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2em;
        background: #f8f9fa;
        border-radius: 12px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        margin: auto;
        margin-top: 5em;

    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 0.8em;
        margin-top: 1em;
        width: 100%;
    }

    .button-container {
    display: flex;
    align-items: center;
    gap: 0.5em; 
    }

    .copy-button{
        background-color: none;
        border: none;
        padding: 0;
        cursor: pointer;
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

    .button:hover {
        background: #0056b3;
    }

    img {
		height: 1em;
        width: 1em;
	}
</style>