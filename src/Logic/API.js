

let API = import.meta.env.VITE_PUBLIC_API_URL;


export async function Login(LoginData) {
  try {
    const response = await fetch(API + `/User/Login?Email=${LoginData.Email}&Password=${LoginData.Password}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    console.log(await response.text);
    return await response.text();
  } catch (error) {
    console.error('Error during login:', error);
    return null; // Or handle the error as needed
  }
}


export async function GetUser (UserID) {
  let Data = await fetch(API + '/User/GetUser?UserID=' + UserID,{
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("Token")}`,
    }
  }).then(res => res.json);
  return Data;
}



export async function GetAllUsers () {
  let Data = await fetch(API + '/User/GetAllUsers',{
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("Token")}`,
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return Data;
}



export async function AddUser(UserData) {
  let Data = await fetch(API + '/User/AddUser', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("Token")}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(UserData) 
  }).then(res => res.json());

  return Data;
}

export async function AddAnimal(AnimalData) {
  let Data = await fetch(API + '/Animal/AddAnimal', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("Token")}`,
      'Content-Type': 'application/json'
    },
    body: AnimalData
  }).then(res => res.json());

  return Data;
}