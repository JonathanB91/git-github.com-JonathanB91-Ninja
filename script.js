class Ninja {
    constructor(nombre, salud, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName() {
        console.log(`Mi nombre es ${this.nombre}.`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} tomo sake and obtuvo 10 puntos en su salud!`);
    }
}

const ninja1 = new Ninja('Hanzo', 400);
ninja1.drinkSake();
ninja1.showStats();

