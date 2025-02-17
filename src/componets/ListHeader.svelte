<script>    
    export let ListHead = {
                Value1: "Navn",
                Value2: "Rolle",
                Value3: "Telefon",
                Value4: "Hovedområde"
            }
</script>

<div>
    <div class="ListeComp">
        <div>{ListHead.Value1}</div>
        <div>{ListHead.Value2}</div>
        <div>{ListHead.Value3}</div>
        <div>{ListHead.Value4}</div>
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