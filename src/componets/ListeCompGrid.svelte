<script>
import PictureList from '$lib/PictureList.js';
export let Data = {};
</script>



<div class="ListeComp">
    {#each Object.entries(Data) as [key, value]}
      <div class="info">
        {#if key === "Role" && PictureList[value] || key==="gender" && PictureList[value]}
          <img src={PictureList[value]} alt={value} />
        {:else}
          {value}
        {/if}
      </div>
    {/each}
  </div>
  


<style>
    .ListeComp {
        display: grid;
        grid-template-columns: 2fr  2fr 2fr 1fr;
        grid-column-gap: 0.2em;
        grid-template-rows: 3em;
        background-color: #698665;
        color: white;
        margin-top: 5px;

    }
    .ListeComp img {
        height: 2em;
    }
    .info {
        display: grid;
        width: fit-content;
        align-items: center;
        justify-content: center;
    }    
</style>