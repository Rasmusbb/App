<script>
    import PictureList from '$lib/PictureList.js';
    export let ProfilData = {}
    export let User = {}
</script>


<div class="Header">
    <h2>Bruger Infomation</h2>
    {#if User.role == "Admin" || User.role == "ZooKeeper"}
        <img alt="Edited"src={PictureList["Edited"]}>
    {/if}
</div>
<div class="info">
    <div class="info">
        <button on:click={() => copyLink(ProfilData.email)} class="copy-button">
            E-mail: {ProfilData.email ?? "ingen E-mail"}
        </button>

        <button on:click={() => copyLink(ProfilData.phone)} class="copy-button">
            Mobil: {ProfilData.phone ?? "intet nummer"}   
        </button>

        <button on:click={() => console.log(User)} class="copy-button">
            Rolle: {ProfilData.role === "Zookeeper" ? "DyrePasser" : ProfilData.role === "Admin" ? "Administrator" : ProfilData.role === "Veterinarian" ? "Dyrlæge" : "Bruger"}
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

    img {
		height: 1em;
	}
</style>