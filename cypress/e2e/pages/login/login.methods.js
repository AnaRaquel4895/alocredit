import { LoginElements } from "./login.elements";

export class loginMethods{
    static insertUsername (username){
        LoginElements.textboxes.username.type(username)
    }
    static insertPassword(password){
        LoginElements.textboxes.password.type(password)
    }
    static clickOnLoginButton(){
        LoginElements.buttons.ingresa.click()
    }
    static login (username,password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}