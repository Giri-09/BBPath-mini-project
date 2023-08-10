export function validation(values){
     let error={} 
     const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+[\]{}|;:'",.<>/?`~\\])[a-zA-Z0-9!@#$%^&*()\-_=+[\]{}|;:'",.<>/?`~\\]{8,}$/

     
     if(values.name ===""){
        error.name = "Name should not be empty"
     } else{
        error.name =""
     }
 
     
     if(values.email ===""){
        error.email = "Email should not be empty"
     }else if(!email_pattern.test(values.email)){
        error.email = "Email format should be appropriate"
     }else{
        error.email =""
     }

     if(values.password === ""){
        error.password = "Password should not be empty"
     }else if(!password_pattern.test(values.password)){
        error.password = "Password must contain number,special character,small and capital letter and length should be atleast 8"
     }else{
        error.password =""
     }

     return error;
}  