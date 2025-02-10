<script>
    import PictureList from '$lib/PictureList.js';

    export let Data = {
        name: "Rasmus sørensen",
        role: "ZooKeeper",
        phone: "80198917",
        mainArea: "Not Found"
    };

    function formatName(fullName) {
        console.log("Hello"); // Debugging log
        let parts = fullName.split(" "); 
        let firstName = parts[0]; 
        let lastInitial = parts.length > 1 ? parts[1][0] : ""; 
        console.log(`${firstName} ${lastInitial}`);
        return `${firstName} ${lastInitial}`;
    }
</script>

<div class="ListeComp">
     <div class="info">{formatName(Data.name)}</div>   
     <div class="info">{Data.phone}</div>  
     <div class="info">{Data.mainArea}</div>
     <img class="info" src={PictureList[Data.role]} alt="ZooKeeper" />
</div>


<style>
    .ListeComp {
        display: flex;
        background-color: #698665;
        color: white;
        margin-top: 5px;
        flex-wrap: wrap;
    }
    .ListeComp div {
        height: 2em;

    }
    .info {
        display: flex;
        width: fit-content;
        align-items: center;
        justify-content: center;
    }    
</style>