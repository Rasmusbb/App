
<script>
    import FormList from './Forms/FormList.js';
    export let showModal = false
    export let modalType = ""
</script>
{#if showModal}
    <div class="Modal">
        <button class="close-btn" on:click={() => showModal = !showModal}>✖</button>
        <svelte:component on:submit={showModal != showModal} this={FormList[modalType]} />
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
</style>
