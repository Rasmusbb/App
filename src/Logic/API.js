

let API = import.meta.env.VITE_PUBLIC_API_URL;



export async function Login(LoginData) {
  let Data = await fetch(API + '/User/Login?Email=' + LoginData.Email + '&Password=' + LoginData.Password, 
    {
      method: 'GET'
    }).then();


  return Data;
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