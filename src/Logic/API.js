
import { jwtDecode } from "jwt-decode";
let API = import.meta.env.VITE_PUBLIC_API_URL;

//UserController
async function Login(LoginData) {
    const response = await fetch(API + `/User/Login?Email=${LoginData.Email}&Password=${LoginData.Password}`, {
      method: 'GET'
    });
    if (!response.ok) {
      return null; 
    }
    return await response.text();
  }

  function ChangePassword(UserPas,Token) {
    console.log(Token);
    let Data = fetch(API + '/User/ChangeUserPassword', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${Token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(UserPas) 
    }).then(res => res.json());
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
    },
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
  let Data = {};
  let Status = 0;
  Data = await fetch(API + '/Animal/GetAllAnimals',{
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${Token}`,
        'Content-Type': 'application/json'
    }
}
  ).then(res => res.json());
  Status = 200;
  return Data;
}


//EnclosureController
async function AddEnclosure(EnclosureData,Token) {
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

function JWTVaild(Token){
  let now = Math.floor(Date.now() / 1000);
  let decoded = jwtDecode(Token);
  if(decoded.exp < now) {
    return false;
  }
  return true;
}



export default {
    Login:  Login,
    GetUser: GetUser,
    GetAllUsers: GetAllUsers,
    AddUser: AddUser,
    AddAnimal: AddAnimal,
    GetAllAnimals: GetAllAnimals,
    AddEnclosure: AddEnclosure,
    ChangePassword: ChangePassword,
    JWTVaild: JWTVaild
};