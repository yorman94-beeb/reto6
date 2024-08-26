let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";
let eliminar = "";

let categoriasValidas = ['frutas', 'lácteos', 'dulces', 'congelados'];

let agregarMas = "sí";  // Valor inicial como "sí", para entrar en el while por primera vez

while (agregarMas !== "no")//: El bucle principal continúa ejecutándose mientras agregarMas no sea "no".
     {
    if (frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0) {
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    } else {
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí', 'no' o 'eliminar'.");
    }

    while (agregarMas !== "sí" && agregarMas !== "no" && agregarMas !== "eliminar") {
        alert("Operación no reconocida");
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí', 'no' o 'eliminar'.");
    }

    if (agregarMas === "no") {
        break;
    }

    if (agregarMas === "sí") {
        comida = prompt("¿Qué comida deseas agregar?");
        categoria = prompt("¿En qué categoría encaja esta comida: 'frutas', 'lácteos', 'dulces' o 'congelados'?");
        
        if (categoriasValidas.includes(categoria)) {
            switch (categoria) {
                case 'frutas':
                    frutas.push(comida);
                    break;
                case 'lácteos':
                    lacteos.push(comida);
                    break;
                case 'dulces':
                    dulces.push(comida);
                    break;
                case 'congelados':
                    congelados.push(comida);
                    break;
            }
        } else {
            alert("Esa categoría no está predefinida.");
        }
    } else if (agregarMas === "eliminar") {
        if (frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0) {
            alert("La lista está vacía.");
        } else {
            eliminar = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}\n\n¿Qué producto deseas eliminar?`);
            if (frutas.includes(eliminar)) {
                frutas.splice(frutas.indexOf(eliminar), 1);
                alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`);
            } else if (lacteos.includes(eliminar)) {
                lacteos.splice(lacteos.indexOf(eliminar), 1);
                alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`);
            } else if (dulces.includes(eliminar)) {
                dulces.splice(dulces.indexOf(eliminar), 1);
                alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`);
            } else if (congelados.includes(eliminar)) {
                congelados.splice(congelados.indexOf(eliminar), 1);
                alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`);
            } else {
                alert(`¡No fue posible encontrar el ítem dentro de la lista!`);
            }
        }
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);
