

let API = import.meta.env.VITE_PUBLIC_API_URL;

export async function Login (LoginData) {
    let Data = await fetch(API + '/User/Login?Email=' + LoginData.Email + '&Password=' + LoginData.Password)
      .then(res => res.json());
    return Data;
}

