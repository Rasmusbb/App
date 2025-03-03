<script>
	import ModalForm from "../componets/ModalForm.svelte";
	import Header from '../componets/Header.svelte';
	import {onMount} from "svelte";
	import '../app.css';
	import { logincheck } from "../Logic/LoginCheck.js";
	let showLogin = $state(false);

	let { children } = $props();
	function ToogleLogin(event) {
		showLogin = false;
	}
	onMount(() => {
		try{
			showLogin = logincheck(localStorage.getItem("Token"));
			if(showLogin) {
				localStorage.removeItem("Token")
			}
		}catch{
			showLogin = true
		}
	})
</script>

<div class="app">
	<main>
		{@render children()}
		<ModalForm on:submit={ToogleLogin} modalType="Login", showModal={showLogin}></ModalForm>
	</main>

	<footer>

	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}


	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
