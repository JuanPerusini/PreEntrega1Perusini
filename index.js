// GENERE 6 VARIABLES PARA DOS CHARACTERS DIFERENTES: tipoDeHeroe, danioBase y vidaBase (para el héroe). Para el enemigo: tipoDeMonstruo, danioMostruoBase y vidaMonstruoBase. tipoDeHeroe y tipoDeMonstruo tiene un string vacío como valor, danioMonstruoBase, danioBase, vidaMonstruoBase y vidaBase valen cero como valor. Use variables que puedan ser reasignadas.

let tipoDeHeroe = ""
let danioBase = 0
let vidaBase = 0
let tipoDeMonstruo = ""
let danioMonstruoBase = 0
let vidaMonstruoBase = 0

// a) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un mago, guerrero o tanque?". En el caso de que elija mago, la vida que se le asignará a vidaBase será de 225, en el caso de que elija guerrero 300 y tanque 450. Para danioBase: mago --> 150, guerrero ---> 80 y tank ---> 50.

function eleccionJugadorHeroe(){
    const jugadorHeroe = prompt("¡Desea crear un Mago, Guerrero o Tanque?");
    switch (jugadorHeroe){
        case "Mago":
            danioBase = 150;
            vidaBase = 225;
            tipoDeHeroe = "Mago";
            return console.log ("Tipo de Heroe:"+tipoDeHeroe+ "\n"+"Vida Base:"+vidaBase+"\n"+"Daño Base:"+danioBase)
            break;
        case "Guerrero":
            danioBase = 80;
            vidaBase = 300;
            tipoDeHeroe = "Guerrero";
            return console.log ("Tipo de Heroe:"+tipoDeHeroe+ "\n"+"Vida Base:"+vidaBase+"\n"+"Daño Base:"+danioBase)
            break;
        case "Tanque":
            danioBase = 50;
            vidaBase = 400;
            tipoDeHeroe = "Tanque";
            return console.log ("Tipo de Heroe:"+tipoDeHeroe+ "\n"+"Vida Base:"+vidaBase+"\n"+"Daño Base:"+danioBase)
            break;
        default:
            alert("Opción incorrecta, intentelo nuevamente");
            eleccionJugadorHeroe();
            break
    }
}
eleccionJugadorHeroe()

// b) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un gobling, orco o demonio?". Para la variable de vidaMonstruoBase: en el caso de que elija gobling: 180, en el caso de que elija orco 350 y demonio: 450. Para danioMonstruoBase: gobling --> 70, orco ---> 130 y demonio ---> 110.

function eleccionJugadorMonstruo(){
    const jugadorMonstruo = prompt("¡Desea crear un Gobling, Orco o Demonio?");
    switch (jugadorMonstruo){
        case "Gobling":
            danioMonstruoBase = 70;
            vidaMonstruoBase = 180;
            tipoDeMonstruo = "Gobling";
            return console.log ("Tipo de Monstruo : "+tipoDeMonstruo+ "\n"+"Vida Base:"+vidaMonstruoBase+"\n"+"Daño Base:"+danioMonstruoBase)
            break;
        case "Orco":
            danioMonstruoBase = 130;
            vidaMonstruoBase = 350;
            tipoDeMonstruo = "Orco";
            return console.log ("Tipo de Monstruo: "+tipoDeMonstruo+ "\n"+"Vida Base:"+vidaMonstruoBase+"\n"+"Daño Base:"+danioMonstruoBase)
            break;
        case "Demonio":
            danioMonstruoBase = 110;
            vidaMonstruoBase = 450;
            tipoDeMonstruo = "Demonio";
            return console.log ("Tipo de Monstruo: "+tipoDeMonstruo+ "\n"+"Vida Base:"+vidaMonstruoBase+"\n"+"Daño Base:"+danioMonstruoBase)
            break;
        default:
            alert("Opción incorrecta, intentelo nuevamente");
            eleccionJugadorMonstruo();
            break
    }
}
eleccionJugadorMonstruo()

// c) Con un bucle, genere 3 encuentros entre los contrincantes. Usando las estadísticas de los personajes, se deberán registrar los movimientos mediante cada iteración: `El ${heroe} ha atacado al ${monstruo}, por ${x} de daño. El monstruo ha perdido ${x} puntos de vida`. También en el caso del monstruo: `El ${monstruo} ha atacado al ${heroe}, por ${x} de daño. El heroe ha perdido ${x} puntos de vida`.

let rondas=1;
function lucha(){
    while (rondas<=4){
        console.log(`RONDA ${rondas}`)
        vidaMonstruoBase = vidaMonstruoBase - danioBase
        console.log(`El ${tipoDeHeroe} ha atacado al ${tipoDeMonstruo}, por ${danioBase} de daño. El monstruo ha perdido ${vidaMonstruoBase} puntos de vida`)
        if (vidaMonstruoBase <=0){
            alert(`El ${tipoDeMonstruo} ha caído. El ganador del encuentro es: ${tipoDeHeroe}`);
            break;
        }
        vidaBase = vidaBase - danioMonstruoBase
        console.log(`El ${tipoDeMonstruo} ha atacado al ${tipoDeHeroe}, por ${danioMonstruoBase} de daño. El heroe ha perdido ${vidaBase} puntos de vida`)
        if (vidaBase<=0){
            alert(`El ${tipoDeHeroe} ha caído. El ganador del encuentro es: ${tipoDeMonstruo}`);
            break;
        }
        rondas++
        empate()
    }
}
lucha()

// e) EN EL CASO DE QUE NO MUERA NINGUNO, VERIFICAR QUIÉN ES EL QUE TIENE MÁS VIDA. ENVIAR UN MENSAJE EN CONSOLA QUE AVISE QUIÉN FUE EL GANADOR DEL ENCUENTRO


function empate(){
    if (vidaBase>0 && vidaMonstruoBase>0 && rondas==4){
        if(vidaBase>vidaMonstruoBase)
            alert(`Ambos contricantes siguen de pie pero el ${tipoDeHeroe} ha salido victorioso`)
        else if (vidaBase<vidaMonstruoBase){
            alert(`Ambos contricantes siguen de pie pero el ${tipoDeMonstruo} ha salido victorioso!`)
        }
        else
            alert(`Ambos contricantes siguen de pie, pero la batalla ha terminado en empate`)
    }
}


