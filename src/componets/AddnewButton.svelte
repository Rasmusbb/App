<script>
import PictureList from "$lib/PictureList";
import { createEventDispatcher } from 'svelte';
export let img 
const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("Click")}>
    <img src={PictureList[img]} alt="{img}">
</button>

<style>
    button{
        margin-top: 1em;
        margin-bottom: 1em;
        display: flex;
        border-color: black;
        border-style: solid;
        justify-content: center;
    }
	img {
		width: 5em;
		height: 2em;
		object-fit: contain;
	}
</style>