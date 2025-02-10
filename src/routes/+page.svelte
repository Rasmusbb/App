<script>
	import logo from '$lib/images/ZooLogo.png';
	import { Login } from '/src/Logic/API.js';
	import { goto } from '$app/navigation';
  import { json } from '@sveltejs/kit';
  import { onMount } from 'svelte';
	let loginfailed = false;
	let test = "Not Localstorage";
	let LoginData =
	{
		Email: "",
		Password: ""
	};
	let user = "";
	async function SubmitLogin(event) {
	event.preventDefault()
	user = await Login(LoginData)
	if (user.userID != null) {
		localStorage.setItem("user", JSON.stringify(user));
		goto("/Home")
	}else{
		console.log("Login failed")
		loginfailed = true;
	}	
  }
</script>





<div>
	<img src={logo} alt="ZooLogo" width="150" height="150" />
	<form on:submit={SubmitLogin}>
		<label for="text">E-mail:</label>
		<input bind:value={LoginData.Email} type="text">
		<label for="password">Password:</label>
		<input bind:value={LoginData.Password} type="password">
		{#if loginfailed == true}
			<p style="color: red;">Wrong password or Email</p>
		{/if}
		<button type="submit">Login</button>
		</form>
</div>
<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 50vh;
	}
	input {
		margin: 10px;
	}
	label {
		margin-top: 20px;
	}
</style>