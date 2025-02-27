<script>
	let Data = {}
	async function SubmitUser(event) {
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

<form on:submit={SubmitUser}>
    <label for="name">BrugerNavn:</label>
    <input bind:value={Data.Name} id="name" type="text">
	<label for="email">Email:</label>
	<input bind:value={Data.email} id="name" type="text">
    <label for="size">Password:</label>
    <input bind:value={Data.password} id="name" type="text">
    <button type="submit" class="submit-btn">Tilføj</button>
</form>



<style>
form{
    display: flex;
    flex-direction: column;
    gap: 15px; /* Adds space between form elements */
    width: 100%; /* Uses more space inside modal */
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 10px;
}

label {
    font-size: 16px;
    font-weight: bold;
    max-width: 90%;
}

/* Inputs and Select */
input{
    width: 90%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}

/* Submit Button */
.submit-btn {
    padding: 10px;
    border: none;
    background-color: #2ecc71;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
}
</style>