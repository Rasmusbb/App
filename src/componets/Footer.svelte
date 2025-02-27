<script>
	import { page } from '$app/state';
	import logo from '$lib/images/ZooLogo.png';
    import PictureList from '$lib/PictureList.js';
    import PictureListInv from '$lib/PictureListInv';
	import UserProfil from '$lib/images/UserProfil.png';
</script>

<footer>
    <nav>
        <ul>
            <a href="/Home">
                <img  src={page.url.pathname === '/Home' ?  PictureList.Home: PictureListInv.Home} alt="Home"/>
            </a>

            <a href="/Animals">
                <img  src={page.url.pathname === '/Animals' ? PictureList.Paw : PictureListInv.Paw} alt="Animals"/>
            </a>

            <a href="/Enclosures">
                <img  src={page.url.pathname === '/Enclosures' ?PictureList.Fence : PictureListInv.Fence} alt="Enclosures"/>
            </a>

            <a href="/Staff">
                <img  src={page.url.pathname === '/Staff' ?PictureList.Staff : PictureListInv.Staff} alt="Staff List"/>
            </a>

            <a href="/MyProfil">
                <img src={UserProfil} alt="MyProfil" />
            </a>
        </ul>
    </nav>
</footer>

<style>
	footer {
		width: 100%;
		z-index: 0;
		display: fixed;
		justify-content: space-between;
	}

	img {
		width: 5em;
		height: 3em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgb(255, 255, 255);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}


	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>


