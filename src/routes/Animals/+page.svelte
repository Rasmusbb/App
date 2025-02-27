<script>
    import Footer from "../../componets/Footer.svelte";
    import PictureList from "$lib/PictureList";
    import AddNew from "../../componets/AddNewButton.svelte";
    import AddnewButton from '../../componets/AddnewButton.svelte';
    import ModalForm from "../../componets/ModalForm.svelte";
    import { onMount } from "svelte"
    import ListeCompGrid from '../../componets/ListeCompGrid.svelte';
    import { jwtDecode } from "jwt-decode";
    import API from "../../Logic/API.js"
    import ListHeader from "../../componets/ListHeader.svelte";
    import { createEventDispatcher } from 'svelte';
  import AddEnclosure from "../../componets/Forms/AddEnclosure.svelte";
    const dispatch = createEventDispatcher();
    let showModal
    let Animals = {} 
    let ListHeadData = {
                Value1: "Navn",
                Value2: "Anlæg",
                Value3: "FysikID",
                Value4: "Køn"
    }
    

    function AddAnimal(event){
        event.preventDefault()
        console.log(event.detail)
        API["AddAnimal"](event.detail, localStorage.getItem("Token"));
    }

    function GetAllAnimals(){
        API["GetAllAnimals"]().then((data) => {
            Animals = data
            console.log(Animals[0])
        })
    }
    let User    
    onMount(() => {
        GetAllAnimals()
        User = jwtDecode(localStorage.getItem("Token"))

})
</script>
    <ModalForm on:submit={AddAnimal} modalType="AddAnimal", showModal={showModal} ></ModalForm>
    <div class="Body">
        <ListHeader ListHead={ListHeadData} />
        {#each Animals as Animal}
        <ListeCompGrid Data={{ name: Animal.name, Enclosure: Animal.Enclosure, physicalID: Animal.physicalID, gender: Animal.gender }} />
    {/each}
    {#if User?.Role === "Admin" || User?.Role == "ZooKeeper"}
        <AddnewButton on:click={showModal = !showModal} img="AddAnimal"/>
    {/if}   
</div>
<Footer />

<style>
    .Body {
        display: flex;
        flex-direction: column;
        min-height: 90vh;
        max-height: 90vh;
    }
</style>