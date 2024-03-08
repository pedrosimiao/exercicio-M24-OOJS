const SpaceVehicle =  require('./space-vehicle');

function Falcon9(name) {
    SpaceVehicle.call(this, name, "SpaceX", "Kerosene and liquid oxygen", true, 22800, 27600);

    Falcon9.prototype = Object.create(SpaceVehicle.prototype);

    this.reachMaxSpeed = function() {
        console.log('\n***Reaching maximum speed***');
        console.log(`\n${this.name} takes approximately 9 minutes to reach it's maximum speed, which is ${this.maxSpeed}km/h\n`);
    }

    this.landing = function() {
        console.log(`***${this.name} is beggining its landing process...***`);
        console.log("\nBoostback Burn: complete");
        console.log("Re-entry Burn: complete");
        console.log("Landing Burn: complete");
        console.log("Landing: complete");
        console.log(`\n***${this.name} has successfully landed!***`);
    }
} 

const falcon9 = new Falcon9("Falcon9");
console.log(falcon9);
falcon9.showSpecs();
falcon9.reachMaxSpeed();
falcon9.liftOff();

//Devido ao aspecto assíncrono das funções setTimeout() e setInterval() contidos na função .liftOff()
//a função .landing acaba ocorrendo antes da conclusão de .liftOff().
//Ainda não aprendi a lidar com a prevenção de execuções em paralelo nas aulas, 
//mas gostaria de ressaltar que .landing() é uma função exclusiva da classe Falcon9.
//Obrigado pela atenção.

// falcon9.landing();
