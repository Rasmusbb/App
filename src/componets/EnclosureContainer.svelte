<script>
    import ListeCompGrid from './ListeCompGrid.svelte';
    import ListHeader from './ListHeader.svelte';
    import UserProfil from './UserProfil.svelte';
    export let User = {}
    export let UserEnclosures = []
    let ListHeadData = {
                Value1: "Navn",
                Value4: "størrelse(m²)"
    }
</script>

<div class="contact-box">
    <h2>Anlæg</h2>
    <ListHeader ListHead={ListHeadData} />
    {#each UserEnclosures  as Enclosure}  
        <ListeCompGrid Data={{name: Enclosure.enclosureName,value: " ",value2: " ",size: Enclosure.size}} />
    {/each}
    {#if User.role == "Admin"}
        <div class="info">
            <button class="addEnclosure" on:click={() => showModal = !showModal}>
                Tilføj anlæg
            </button>
        </div>
    {/if}
</div>

<style>
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
</style>