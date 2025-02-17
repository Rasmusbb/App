
<script>
    export let showModal = false
</script>
{#if showModal}
<div class="BackDrop"> 
    <div class="Modal">
        Hello BB
    </div>
</div>
{/if}


<style>
    .BackDrop{
        display: flex;
        justify-content: center;
        justify-items: center;
        width: 100vw;
        height: 100vh;
        position: fixed;
        background: rgba(169,169,169, 0.9);
    }

    .Modal{
        width: 400px;
        background-color: #242424;
        border-radius: 10px;

    }
</style>