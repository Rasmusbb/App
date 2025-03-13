<script>
    import UserProfil from '$lib/images/UserProfil.png';
    import PictureList from '$lib/PictureList.js';
    import { onMount } from 'svelte';
    import API from '../Logic/API.js'
    import { InvalidTokenError, jwtDecode } from "jwt-decode";
    import { createEventDispatcher } from 'svelte'; 
    import ModalForm from './ModalForm.svelte';
    import EnclosureContainer from '../componets/EnclosureContainer.svelte';
    const dispatch = createEventDispatcher();
    import ContentBox from './ProfilComps/ContentBox.svelte';
    let showModal = false
    export let Backarrow = false;   
    export let UserProfilData;
    let User = {};
    let Enclosures = []
    let UserProfilEnclosures = []
    function copyLink(value) {
        navigator.clipboard.writeText(value);
    }
    function GetAllEnclosures(){
        API["GetAllEnclosures"](localStorage.getItem("Token")).then((data) => {
            Enclosures = data
            if(data == null){
                showLogin = true
            }
        })

        API["GetUsersEnclosures"](UserProfilData.userID,false,localStorage.getItem("Token")).then((data) => {
                UserProfilEnclosures = data
                if(data == null){
                    showLogin = true
                }
                console.log(data)
        })
    }

    async function AddEnclosureToUser(event){
        let Data = {
            userID: UserProfilData.userID,
            EnclosuresID: event.detail
        }
        await API["AddStaffToEnclosure"]()
    }
 
    onMount(() => {
        if(UserProfilData.role == "ZooKeeper"){
            GetAllEnclosures()

        }
        User = jwtDecode(localStorage.getItem("Token")); 
    })
</script>

<ModalForm on:submit={AddEnclosureToUser} modalType="AssingForm", showModal={showModal}></ModalForm>
<div class="profile-header">
    {#if Backarrow}
        <img src={PictureList["Leftarrow"]} class="arrow" alt="Back" on:click={() => {dispatch("close")}} style="cursor: pointer;">
    {/if}

    <h1 class="user-name">{UserProfilData.name}</h1>
    <img src="{UserProfil}" alt="Profile" class="profile-img">
</div>

<!-- Contact Box -->
{#if UserProfilData}
    <ContentBox ProfilData={UserProfilData} Content="UserInfo" User={User}></ContentBox>
    {#if UserProfilData.role === "ZooKeeper"}
        <EnclosureContainer User={UserProfilData} UserEnclosures={UserProfilEnclosures}></EnclosureContainer>
    {/if}
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
</style>
