const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const valueForm = (e) => {
 switch(e.target.name){
     case "name":
           valueCamp(expressions.name, e.target, 'name');
     break;
    
     case "email":
        valueCamp(expressions.email, e.target, 'email') 
     break;
}
}

const valueCamp = (expression, input, camp) =>{
    if(expression.test(input.value)){ 

            document.getElementById(`group__${camp}`).classList.remove('form__group-incorrect');
        
            document.getElementById(`group__${camp}`).classList.add('form__group-correct');
            
        }
        
        else{
            
            document.getElementById(`group__${camp}`).classList.add('form__group-incorrect');
            
            document.getElementById(`group__${camp}`).classList.remove('form__group-correct');

        }

    }


inputs.forEach((input) => {
 input.addEventListener('keyup', valueForm);
 input.addEventListener('blur', valueForm)
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});