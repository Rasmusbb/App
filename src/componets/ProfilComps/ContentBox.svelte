
<script>
    import ContentList from "./ContentList";
</script>


<div class="contact-box">
    <svelte:component this={ContentList["AnimalInfo"]} />
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