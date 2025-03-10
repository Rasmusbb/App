
<script>
    import { jwtDecode } from "jwt-decode";
    import ModalForm from "../componets/ModalForm.svelte";
    import Header from '../componets/Header.svelte';
    import API from '../Logic/API'
    import {onMount} from "svelte";
    import { goto } from '$app/navigation';
    import EnclosureContainer from '../componets/EnclosureContainer.svelte';
    let Isdesktop = true;
    let UserEnclosures = []
    let User = {}
    let showLogin = false;
    let Token
    let screen = {
        width: 0,
        height: 0
    };
    
    const updateSize = () => {
        screen = {
            width: window.screen.width,
            height: window.screen.height
        };
        Isdesktop = screen.width > 1024;
        return screen;
    };

    function GetAllUsersEnclosures(){
        API["GetUsersEnclosures"](User.userID,false,localStorage.getItem("Token")).then((data) => {
                UserEnclosures = data
                if(data == null){
                    showLogin = true
                }
                console.log(data)
        })
    }

    async function Startup(){
        showLogin = false
        try {
            User = jwtDecode(localStorage.getItem("Token"))
        } catch (error) {
            console.log(error)
            showLogin = true
        }
        GetAllUsersEnclosures()
        screen = updateSize();
        window.addEventListener("resize", updateSize)
        return () => window.removeEventListener("resize", updateSize);

    }

    onMount(() => {
        Startup()
    })
</script>
<ModalForm on:submit={Startup} modalType="Login", showModal={showLogin}></ModalForm>
<div>
    <h1>Velkommen tilbage {User.name}</h1>
        <div class="Body">
            <EnclosureContainer User={User} UserEnclosures={UserEnclosures}></EnclosureContainer>
        </div>
    
</div>


<style>
    .Body {
        min-height: 90vh;
        max-height: 90vh;
    }
</style>