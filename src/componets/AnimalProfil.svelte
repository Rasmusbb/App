<script>
    import UserProfil from '$lib/images/UserProfil.png';
    import PictureList from '$lib/PictureList.js';
    import { onMount } from 'svelte';
    import API from '../Logic/API.js'
    import { jwtDecode } from "jwt-decode";
    import { createEventDispatcher } from 'svelte'; 
    import ModalForm from './ModalForm.svelte';
    import ContentBox from './ProfilComps/ContentBox.svelte';
    const dispatch = createEventDispatcher();
    let showModal = false
    let User = {}
    export let Backarrow = false;   
    export let ProfilData;
    function copyLink(value) {
        navigator.clipboard.writeText(value);
    }

    async function AddEnclosureToUser(event){
        Data = {
            userID: ProfilData.userID,
            EnclosuresID: event.details
        }
        console.log(Data)
        await API["AddStaffToEnclosure"]()
    }
 
    onMount(() => {
        try{
            User = jwtDecode(localStorage.getItem("Token")); 
        }catch{

        }
    })
</script>

<ModalForm on:submit={AddEnclosureToUser} modalType="AssingForm", showModal={showModal}></ModalForm>
<div class="profile-header">
    {#if Backarrow}
        <img src={PictureList["Leftarrow"]} class="arrow" alt="Back" on:click={() => {dispatch("close")}} style="cursor: pointer;">
    {/if}

    <h1 class="user-name">{ProfilData.name}</h1>
</div>

<!-- Contact Box -->
{#if ProfilData}
    <ContentBox ProfilData={ProfilData} Content="AnimalInfo" User={User}></ContentBox>
{/if}
<style>
    .profile-header {
        display: flex;
        align-items: center;
        justify-content: center; /* Keeps the name centered */
        position: relative;
        width: 100%;
        padding-top: 1em;
    }

   
    .user-name {
        font-size: 1.5em;
        font-weight: bold;
        white-space: nowrap;
        color:  black;
    }

  
    .profile-img {
        position: absolute;
        right: 1em; 
        width: 4em;
        height: 4em;
        border-radius: 50%;
        object-fit: cover;
    }
    .arrow{
        position: absolute;
        left : 1em; 
        width: 3em;
        height: 3em;
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

    .addEnclosure {
        padding: 10px;
        border: none;
        background-color: #2ecc71;
        color: white;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 10px;
    }
    .addEnclosure:hover{
        background-color: red;
    }

</style>
