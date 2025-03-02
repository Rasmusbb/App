
import API from './API'

export function logincheck(Token){
    Token = localStorage.getItem("Token")
    if (Token == null) {
        return true
    }else if(!API["JWTVaild"](Token)) {
        return true
    }
    return false
}