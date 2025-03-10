<script>
    import Footer from "../../componets/Footer.svelte";
    import PictureList from "$lib/PictureList";
    import AddNew from "../../componets/AddNewButton.svelte";
    import AddnewButton from '../../componets/AddnewButton.svelte';
    import ModalForm from "../../componets/ModalForm.svelte";
    import { onMount } from "svelte"
    import API from "../../Logic/API.js"
    import ListeCompGrid from '../../componets/ListeCompGrid.svelte';
    import { jwtDecode } from "jwt-decode";
    import ListHeader from "../../componets/ListHeader.svelte";
    import { createEventDispatcher } from 'svelte';
    import AddEnclosure from "../../componets/Forms/AddEnclosure.svelte";
    import AnimalProfil from "../../componets/AnimalProfil.svelte";
    const dispatch = createEventDispatcher();
    let User    
    let showModal
    let ProfilData = {}
    let ShowProfil = false
    let Animals = []
    let ListHeadData = {
                Value1: "Navn",
                Value2: "Anlæg",
                Value3: "FysikID",
                Value4: "Køn"
    }
    

    function AddAnimal(event){
        event.preventDefault()
        API["AddAnimal"](event.detail, localStorage.getItem("Token"));
        showModal = !showModal
        GetAllAnimals()
    }

    function GetAllAnimals(){
        API["GetAllAnimals"]().then((data) => {
            Animals = data
            console.log(Animals)
        })
    }
    function GetProfil(event) {
        Animals.forEach(Animal => {
            if(Animal.animalID === event.detail){
                ProfilData = Animal
            }
        });
        ShowProfil = true
    }
    onMount(() => {
        try {
            User = jwtDecode(localStorage.getItem("Token"))
            GetAllAnimals()
            console.log(User)
        } catch (error) {
            console.log(error)
        }

})
</script>

{#if !ShowProfil}
    <ModalForm on:submit={AddAnimal} modalType="AddAnimal", showModal={showModal} ></ModalForm>
    <div class="Body">
        <ListHeader ListHead={ListHeadData} />
        {#each Animals as Animal}
        <ListeCompGrid on:click={GetProfil} ID={Animal.animalID} Data={{ name: Animal.name, Enclosure: Animal.Enclosure, physicalID: Animal.physicalID, gender: Animal.gender }} />
    {/each}
    {#if User?.role === "Admin" || User?.role == "ZooKeeper"}
        <AddnewButton on:click={showModal = !showModal} img="AddAnimal"/>
    {/if}   
</div>
{:else}
    <AnimalProfil on:close={ShowProfil = false} Backarrow={ShowProfil} ProfilData={ProfilData}></AnimalProfil>
{/if}

<Footer />

<style>
    .Body {
        display: flex;
        flex-direction: column;
        min-height: 90vh;
        max-height: 90vh;
    }
</style>