<script>
    import { onMount} from 'svelte';
    import Footer from "../../componets/Footer.svelte"
    import ListeComp from "../../componets/ListeCompGrid.svelte"
    import ListHeader from "../../componets/ListHeader.svelte";
    import { GetAllUsers } from '/src/Logic/API.js';
  import ListeCompGrid from '../../componets/ListeCompGrid.svelte';
    let ListHeadData = {
                Name: "Navn",
                Role: "Rolle",
                phone: "Telefon",
                mainArea: "fokus"
    }

    let User
    let Users
    async function GetUsers(){
        Users = await GetAllUsers()
    }
    onMount(() => {
        GetUsers()
})

    
</script>


<div>
    <div class="Staff">
        <ListHeader ListHead = {ListHeadData}></ListHeader>
        {#each Users as User}
		    <ListeCompGrid Data={User}/>
        {/each}


    </div>
    <Footer />
</div>


<style>
    .Staff {
            display: flex;
            flex-direction: column;
            min-height: 90vh;
    }

</style>
