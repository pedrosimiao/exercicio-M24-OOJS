const SpaceVehicle =  require('./space-vehicle');

function Electron(name) {
    SpaceVehicle.call(this, name, "Rocket Lab", "Kerosene and liquid oxygen", true, 300, 27000);

    Electron.prototype = Object.create(SpaceVehicle.prototype);

    this.reachMaxSpeed = function() {
        console.log('\n***Reaching maximum speed***');
        console.log(`\n${this.name} takes approximately 8 minutes to reach it's maximum speed, which is ${this.maxSpeed}km/h\n`);
    }
} 

const electron = new Electron("Electron");
console.log(electron);
electron.showSpecs();
electron.reachMaxSpeed();
electron.liftOff();