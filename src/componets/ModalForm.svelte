
<script>
    import FormList from './Forms/FormList.js';
    export let showModal = false
    export let modalType = ""
    export let Data = {}
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function toggleModal(event) {
        event.preventDefault()
        dispatch("submit",event.detail);
    }
</script>
{#if showModal}
    <div class="Modal">
        <button class="close-btn" on:click={() => showModal = !showModal}>✖</button>
        <svelte:component on:submit={toggleModal} this={FormList[modalType]} />
    </div>
{/if}

<style>
/* Modal Styling */
.Modal {
    background-color: rgba(162, 166, 155);
    position: fixed;
    border-radius: 10px;
    width: 80vw;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 10px;
    z-index: 1;
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
