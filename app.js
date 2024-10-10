
// const Rusult=document.getElementById('rusult')

// function keybordvalue(value) {
//     Rusult.value +=value;
// }

// function cler(value) {
//     Rusult.value=''
// }

// function dels() {
//    Rusult.value=Rusult.value.slice(0,-1)
    
// }

// function eg() {
//     try{
//         Rusult.value=eval(Rusult.value);
//     }
//     catch(error){
//         Rusult.value='error';
//     }
// }









const Rusult =document.getElementById('rusult');
function keybordvalue(value) {
    Rusult.value +=value;
}

function cler() {
    Rusult.value=''
}

function dels() {
    Rusult.value=Rusult.value.slice(0,-1)
}

function eg() {
try{
    Rusult.value=eval(Rusult.value);
}
catch(error){
    Rusult.value='error'
}

    
}



