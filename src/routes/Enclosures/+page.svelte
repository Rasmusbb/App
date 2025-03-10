<script>
    import Footer from "../../componets/Footer.svelte"
    import ModalForm from "../../componets/ModalForm.svelte";
    import AddnewButton from "../../componets/AddNewButton.svelte";
    import ListeCompGrid from '../../componets/ListeCompGrid.svelte';
    import ListHeader from "../../componets/ListHeader.svelte";
    import API from "../../Logic/API.js"
    import { onMount } from "svelte"
    import { jwtDecode } from "jwt-decode";
    let showModal = false
    let showLogin = false
    let User    
    let Enclosures = {}
    const toggleModal = () =>{
        showModal = !showModal
    }
    let ListHeadData = {
                Value1: "Navn",
                Value4: "Størlses"
    }
    function GetAllEnclosures(){
        API["GetAllEnclosures"](localStorage.getItem("Token")).then((data) => {
            Enclosures = data
            if(data == null){
                showLogin = true
            }
        })
    }
    function AddEnclosure(event){
        API["AddEnclosure"](event.detail, localStorage.getItem("Token"));
        showModal = !showModal
        GetAllEnclosures()
    }
    async function Startup() {
        GetAllEnclosures()
        try{
            User = jwtDecode(localStorage.getItem("Token"))
        }catch{}
    }
    onMount(() => {
        Startup()
    })
</script>
<ModalForm on:submit={Startup} modalType="Login", showModal={showLogin}></ModalForm>
<ModalForm on:submit={AddEnclosure} modalType="AddEnclosure", showModal={showModal} ></ModalForm>
<div class="Body">
    <ListHeader ListHead={ListHeadData} />
    {#each Enclosures as Enclosure}  
        <ListeCompGrid Data={{name: Enclosure.enclosureName,value: " ",value2: " ",size: Enclosure.size}} />
    {/each}
    {#if User?.role === "Admin" || User?.role == "ZooKeeper"}  
        <AddnewButton  on:click={toggleModal} img="Fence"/>
    {/if} 
</div>

<style>
    .Body {
        display: flex;
        flex-direction: column;
        min-height: 90vh;
        max-height: 90vh;
    }
</style>