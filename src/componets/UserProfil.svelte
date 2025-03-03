<script>
    import UserProfil from '$lib/images/UserProfil.png';
    import PictureList from '$lib/PictureList.js';
    import { onMount } from 'svelte';

    export let User;
    function copyLink(value) {
        navigator.clipboard.writeText(value);
    }
    onMount(() => {
        console.log(User)
    })
</script>

<div class="profile-header">
    <h1 class="user-name">{User.Name}</h1>
    <img src="{UserProfil}" alt="Profile" class="profile-img">
</div>

<!-- Contact Box -->
{#if User}
    <div class="contact-box">
        <h2>Bruger Oplysninger</h2>
        <div class="info">
            <button on:click={() => copyLink(User.Email)} class="copy-button">
                E-mail: {User.Email}
            </button>

            <button on:click={() => copyLink(User.Phone)} class="copy-button">
                Mobil: {User.Phone}
            </button>

            <button on:click={() => copyLink(User.Role)} class="copy-button">
                Rolle: {User.Role}
            </button>
        </div>
    </div>

    {#if User.Role === "ZooKeeper"}
        <div class="contact-box">
            <h2>Anlæg</h2>
            <div class="info">
                <button on:click={() => copyLink(User.Email)} class="addEnclosure">
                    Tilføj anlæg
                </button>
            </div>
        </div>
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

    .copy-button {
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

    .copy-button:hover {
        background: #0056b3;
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
