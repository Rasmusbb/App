
<script>
    import { json } from "@sveltejs/kit";
    import { onMount } from "svelte";
    import UserProfil from '$lib/images/UserProfil.png';
      let user
      onMount(() => {
          user = JSON.parse(localStorage.getItem("user"))
          console.log(user)
  
      })

      function copyLink(value){
		navigator.clipboard.writeText(value);
	}
</script>

<div>
    <div class="main">
        {#if user != null}
        <div class="Head">
            <div class="ListeComp">
                <h1>{user.name}</h1>
                <img src="{UserProfil}" alt="Profil">
            </div>
        </div>
        <div src="Body">
            <div class="ContactInfo">
                <h2>Kontankt Infomation</h2>
                <div class="info">
                    <h3 on:click={() => copyLink(user.email)} class="ListeComp">Email: {user.email}</h3>
                    <h3 on:click={() => copyLink(user.phone)} class="ListeComp">Phone: {user.phone}</h3>
                </div>
            </div>
        </div>
        {/if}
      </div>
  </div>
  
  <style>
      .main{
          display: grid;
          grid-template-columns: auto;
          grid-template-rows: 6em;
          min-height: 90vh;
      }
      .Head{
        display: grid;
        max-height: 5em;
      }

      img {
		width: 4.5em;
		height: 4.5em;
		object-fit: contain;
	}
    .info{
        display: grid;
        grid-row-gap: 1em;
    }
    .ListeComp {
        display: grid;
        grid-template-columns: 75% 25%;
        grid-column-gap: 1em;
        grid-template-rows: 0.2em;
    }

  </style>