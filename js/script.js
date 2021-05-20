
let user_name = prompt('Enter your name: ');
let greetings = prompt('Hi, ' + user_name + ' would you like to enter items to the inventory? (press enter to inventorize)');
// let inventory_choice = prompt('1. Consoles - 2. Videogames - 3. PC Hardware - 4. Electronics - 5. Others (enter a number and press enter)');

//la respuesta de este prompt se usara en el switch
let inventory_choice = prompt('1. Consoles (enter a number and press enter)');
let consoles = [];
// let videogames = [];
// let pc_hardware = [];
// let electronics = [];
// let others = [];

// switch que va a ir variando entre las categorias de productos
switch(inventory_choice){
    case '1':
        while(true){
            //objeto que va a contener la informacion del producto
            const add_consoles = {
                console_name:prompt('Enter the name of the console'),
                console_id:prompt('Enter the id'),
                add_price: prompt('Enter the price')
            }
            //añadimos el objeto al array
            consoles.push([add_consoles]);
            //en caso de responder afirmativamente la pregunta, se va a empezar el loop de nuevo
            let loop = prompt('Would you like to keep adding consoles? (if affirmatively type yes)');
            //lo pasamos a lower case para que sin importar si lo escribe en minuscula o mayuscula, se tome la respuesta.
            loop_lower_case = loop.toLowerCase();
            //en caso de que la respuesta sea distinta de 'yes' entonces se 'rompera' el while y ya no se añadiran mas items
            if(loop_lower_case !=='yes'){
                break;
            }
        }
        //mostramos el array
        console.log(consoles);
        break;
   default:
       prompt('This is not a valid choice (refresh the page)');
}

