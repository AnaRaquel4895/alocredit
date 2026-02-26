
export class LoginElements{
    static get textboxes(){
        return{
            get username(){
                return cy.get('#email');
            },
            get password(){
                return cy.get('#password')
            }
        };

    }
    static get buttons (){
        return{
            get ingresa(){
                return cy.get('#kt_sign_in_submit')
            }
        }
    }
}