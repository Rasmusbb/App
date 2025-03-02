
<script>
    import FormList from './Forms/FormList.js';
    export let showModal = false
    export let modalType = "" 
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function toggleModal(event) {
        event.preventDefault()
        dispatch("submit",event.detail)
    }

</script>

{#if showModal}
    <div class="modal-overlay">
        <div class="Modal">
            {#if modalType != "Login"} 
                <button class="close-btn" on:click={() => showModal = !showModal}>✖</button>
            {/if}   
            <svelte:component on:submit={toggleModal} this={FormList[modalType]} />
        </div>
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
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.01);
    height: 100%;
    z-index: 99; 
}
</style>
