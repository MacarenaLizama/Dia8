var pizza = {
    tipoCorteza:        ["tradicional", "relleno queso", "sinborde"],
    tipoMasa:           ["estilo chicago", "masa gruesa", "masa delgada", "tipo pan", "lanzada a mano"],
    tipoSalsa:          ["pomarola", "italiana","marinara","sin salsa"],
    quesos:             ["mozzarella", "parmesano","feta","mantecoso","sin queso"],
    otrosIngredientes:  ["champiñones", "pepperoni", "salchicha", "aceituna", "oregano", "tomate", "cebollas"]
};
    
/*console.log(pizza);*/


function pizzaOven(tipoCorteza, tipoMasa, tipoSalsa, quesos, otrosIngredientes) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoMasa= tipoMasa;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.otrosIngredientes = otrosIngredientes;
    return pizza;
}
    
var pizza1=pizzaOven("tradicional", "estilo chicago","sin salsa","mozzarella", ["pepperoni", "salchicha"]);
var pizza2=pizzaOven("sin borde","lanzada a mano","marinara",["mozzarella", "feta"],["champiñones", "aceituna", "cebollas"]);
var pizza3=pizzaOven("relleno queso","tipo pan", "pomarola","mantecoso",["pepperoni", "aceituna"]);
var pizza4=pizzaOven("tradicional","masa delgada", "italiana", "sin queso", ["champiñones", "oregano", "aceituna"]); 


console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

