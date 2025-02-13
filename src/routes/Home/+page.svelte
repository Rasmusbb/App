
<script>
    import Header from '../../componets/Header.svelte';
    import Footer from '../../componets/Footer.svelte';
    import {onMount} from "svelte";
    import { goto } from '$app/navigation';
    let Isdesktop = true;
    let User = {
        name: "Loading...",
    };
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

    onMount(() => {
        screen = updateSize();
        Token = localStorage.getItem("Token")
        console.log("User:")
        if (Token == null) {
            goto("/")
        }
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    })
</script>
<div>
    {#if Isdesktop}
        <Header />
    {:else}  
       <Footer />
    {/if}
    
</div>