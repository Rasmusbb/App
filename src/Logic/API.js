

let API = import.meta.env.VITE_PUBLIC_API_URL;

//UserController
async function Login(LoginData) {
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


async function GetUser (UserID,Token) {
  let Data = await fetch(API + '/User/GetUser?UserID=' + UserID,{
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${Token}`,
    }
  }).then(res => res.json);
  return Data;
}



async function GetAllUsers (Token) {
  let Data = await fetch(API + '/User/GetAllUsers',{
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${Token}`,
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());
  return Data;
}



async function AddUser(UserData,Token) {
  let Data = await fetch(API + '/User/AddUser', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(UserData) 
  }).then(res => res.json());

  return Data;
}


//AnimalController
async function AddAnimal(AnimalData,Token) {
  let Data = await fetch(API + '/Animal/AddAnimal', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(AnimalData)
  }).then(res => res.json());
  return Data;
}

async function GetAllAnimals(Token) {
  let Data = await fetch(API + '/Animal/GetAllAnimals',{
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${Token}`,
        'Content-Type': 'application/json'
    }
}
  ).then(res => res.json());
  return Data;
}


//EnclosureController
async function AddEnclosure(EnclosureData,Token) {
  console.log(EnclosureData);
  let Data = await fetch(API + '/Enclosure/AddEnclosure', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(EnclosureData)
  }).then(res => res.json());
  return Data;  
}


export default {
    Login:  Login,
    GetUser: GetUser,
    GetAllUsers: GetAllUsers,
    AddUser: AddUser,
    AddAnimal: AddAnimal,
    GetAllAnimals: GetAllAnimals,
    AddEnclosure: AddEnclosure
};