<script>
	import { AddUser } from "../Logic/API";

	async function SubmitLogin(event) {
		event.preventDefault()
		console.log(event)
		//User = AddUser()
		if (Token != null) {
			localStorage.setItem("Token", Token);
			goto("/Home")
		}else{
			console.log("Login failed")
			loginfailed = true;
		}
  	}
</script>

  <div>
	<form on:submit={SubmitNewUser}>
		<label for="text">E-mail:</label>
		<input bind:value={LoginData.Email} type="text">
		<label for="password">Password:</label>
		<input bind:value={LoginData.Password} type="password">
		<button type="submit">Login</button>
	</form>
  </div>
  
