
let user_name = prompt('Enter your name: ');
let greetings = prompt('Hi, ' + user_name + ' would you like to enter items to the inventory? (press enter to inventorize)');
// let inventory_choice = prompt('1. Consoles - 2. Videogames - 3. PC Hardware - 4. Electronics - 5. Others (enter a number and press enter)');
let inventory_choice = prompt('1. Consoles (enter a number and press enter)');

let consoles = [];
// let videogames = [];
// let pc_hardware = [];
// let electronics = [];
// let others = [];

switch(inventory_choice){
    case '1':
        while(true){
            const add_consoles = {
                console_name:prompt('Enter the name of the console'),
                console_id:prompt('Enter the id'),
                add_price: prompt('Enter the price')
            }
            consoles.push([add_consoles]);
            let loop = prompt('Would you like to keep adding consoles? (if affirmatively type yes)'); 
            loop_lw = loop.toLowerCase();
            if(loop_lw!=='yes'){
                break;
            }
        }
        console.log(consoles);
        break;
   default:
       prompt('This is not a valid choice (refresh the page)');
}

