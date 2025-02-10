<script>
import PictureList from '$lib/PictureList.js';
export let Data = {
                name: "Rasmus sørensen",
                role: "ZooKeeper",
                phone: "80198917",
                mainArea: "NotFound"
            }
            
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
     <div class="info">
        <img  src={PictureList[Data.role]}  alt="{Data.role}"/>
     </div>
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