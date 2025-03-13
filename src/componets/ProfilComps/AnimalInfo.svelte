<script>
    import PictureList from '$lib/PictureList.js';
    import EditCopyButton from './EditCopyButton.svelte';
    import API from '../../Logic/API.js'
    import { onMount } from 'svelte';
    import { nonpassive } from 'svelte/legacy';
    export let ProfilData = {}
    export let User = {}
    let canEdit = false
    let editProfilData = {}
    let showedit = {}
    let EditedProfilChanged = false
    let EditedProfil = {}
    let Options = [{value: null,name: "Intet Anlæg"}]

    function editProfil(event){
        switch(event.detail.origin){
            case("FysikID"):
                editProfilData.physicalID = event.detail.value
            break
            case("Alder"):
                editProfilData.age = event.detail.value 
            break
            case("Føseldag"):
                editProfilData.birthDate = event.detail.value 
            break
            case("Køn"):
                editProfilData.gender = event.detail.value
            break
            case("Art"):
                editProfilData.species = event.detail.value
            break

            case("Anlæg"):
                editProfilData.enclosureName = event.detail.name
                editProfilData.enclosureID = event.detail.value 
                console.log(event.detail.value)
                break
        }
        EditedProfilChanged = true

    }
    function copyLink(value) {
        navigator.clipboard.writeText(value);
    }
    
    async function GetAllEnclosuresOptions(){
        await API["GetAllEnclosures"](localStorage.getItem("Token")).then((Data) => {
            Data.forEach(Enclosure => {
                let option ={
                    value: Enclosure.enclosureID,
                    name: Enclosure.enclosureName
                }
                Options.push(option)
            });
        })        
    }

    function calculateAge(birthday){
        const birthDate = new Date(birthday);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        return age;
    }

    function TranslateGender(gender){
        switch(gender){
            case "Male":
                ProfilData.Tgender = "Han"
            break;
            case "Female":
                ProfilData.Tgender = "Hun"
            break;
            
            default:
                ProfilData.Tgender = "Intet køn"
            break;
        }
    }
    async function Startup(){
        TranslateGender(ProfilData.gender)
        if (User.role == "ZooKeeper" || User.role == "Admin"){
            canEdit = true
        }
        ProfilData.age = calculateAge(ProfilData.birthday)
        await GetAllEnclosuresOptions()
        
    }
    onMount(() => {
        Startup()
        editProfilData = ProfilData
    })
</script>


<div class="Header">
    <h2>Dyrets Oplysninger</h2>
</div>
<div class="info">
    <EditCopyButton Name={"FysikID"} Data={ProfilData.physicalID} on:submit={editProfil()}></EditCopyButton>
    <EditCopyButton Name={"Alder"} Data={ProfilData.age} messureingunit={"år"}></EditCopyButton>
    <EditCopyButton Name={"Føseldag"} Data={ProfilData.birthday.split("T")[0]}></EditCopyButton>
    <EditCopyButton Name={"Køn"} Data={ProfilData.Tgender}></EditCopyButton>
    <EditCopyButton Name={"Art"} Data={ProfilData.species}></EditCopyButton>
    <EditCopyButton Type="Selector" Options={Options} Name={"Anlæg"} Data={ProfilData.enclosureName} on:submit={editProfil}></EditCopyButton>
</div>
{#if EditedProfilChanged}
<div class="button-group">
    <button class="save-button" on:click={console.log(editProfilData)}>Gem ændringer</button>
    <button class="cancel-button">Fortryd ændringer</button>
</div>
{/if}

<style>
    .Header{
        display: flex;
        width: 100%;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 0.8em;
        margin-top: 1em;
        width: 100%;
    }

    .button-group {
        display: flex;
        gap: 1em;
        margin-top: 1em;
    }

    .save-button, .cancel-button {
        flex: 1; /* Makes buttons equal width */
        padding: 0.8em;
        font-size: 1em;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.1s ease;
    }

    .save-button {
        background-color: #28a745; /* Green */
        color: white;
    }

    .save-button:hover {
        background-color: #218838;
        transform: scale(1.05);
    }

    .cancel-button {
        background-color: #dc3545; /* Red */
        color: white;
    }

    .cancel-button:hover {
        background-color: #c82333;
        transform: scale(1.05);
    }

</style>