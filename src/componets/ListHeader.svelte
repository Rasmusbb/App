<script>    
    export let ListHead = {
                Name: "Navn",
                Role: "Rolle",
                phone: "Telefon",
                mainArea: "Hovedområde"
            }
</script>

<div>
    <div class="ListeComp">
        <div>{ListHead.Name}</div>
        <div>{ListHead.phone}</div>
        <div>{ListHead.mainArea}</div>
        <div>{ListHead.Role}</div>
    </div>
</div>

<style>
    .ListeComp {
        display: grid;
        grid-template-columns: 2fr  2fr 2fr 1fr;
        grid-column-gap: 0.2em;
        grid-template-rows: 2em;
        font-weight: bolder;
        font-size: large;
    }


    .ListHeader {
        display: flex;
        width: 100%;
        height: 2em;
        margin-top: 5px;
        font-weight: bolder;
        font-size: large;
        flex-wrap: wrap;
    }
</style>