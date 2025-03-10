
import API from './API'

export function logincheck(Token){
    try{
        Token = localStorage.getItem("Token")
    }catch{
        return true
    }
    if (Token == null) {
        return true
    }else if(!API["JWTVaild"](Token)) {
        return true
    }
    return false
}

export function ToogleLogin(event) {
    showLogin = false;
    let page = window.location.pathname
    goto("/").then(() => {
        goto(page)
    })
}