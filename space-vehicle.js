function SpaceVehicle(name, manufacturer, fuel, isManned, maxLoad, maxSpeed) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.fuel = fuel;
    this.isManned = isManned
    this.maxLoad = maxLoad;
    this.maxSpeed = maxSpeed;

    this.showSpecs = function() {
        console.log('\n***Specs***')
        console.log(`Spacecraft: ${name}\nManufacturer: ${manufacturer}\nFueled by: ${fuel}\nManned: ${isManned ? 'Yes' : 'No'}\nMaximum Load: ${maxLoad}kg\nMaximum Speed: ${maxSpeed}Km/h\n`);
    }

    this.reachMaxSpeed = function() {
        console.log('\n***Reaching maximum speed***');
        console.log(`\n${name} takes approximately 8 to 9 minutes to reach it's maximum speed, which is ${maxSpeed}km/h\n`);
    }


    this.liftOff = function() {
        console.log("\n***Launch***");
        console.log(`T minus ten seconds for ${name} to liftoff...\n`);
        let i = 10;

        function countdown() {
            if (i >= 0) {
                setTimeout(function() {
                    process.stdout.clearLine();  
                    process.stdout.cursorTo(0);  

                    const progressBar = Array(10 - i).fill('\u2588').join('') + Array(i).fill('\u2592').join(''); // caractéres unicode \u2588 e \u2592 para encher a barra de progresso.
                    process.stdout.write(`[${progressBar}] ${i}s`);

                    i--;
                    countdown();  // Recursão
                }, 1000);
            } 
            else {
                console.log(`\n${name} has been lifted off!\n`);
                clearTimeout();
                
                console.log(`\n${name} is currently on it's way to reach high atmosphere\n`);
                const totalMinutes = Math.floor(Math.random() * ((2 - 1) + 1)) + 1;
                const totalSeconds = Math.floor(Math.random() * 60);
                const progressBarLength = 20;
                let currentSeconds = 0;

                function updateProgressBar() {
                    const progress = currentSeconds / (totalMinutes * 60 + totalSeconds);
                    const progressBar = Array(Math.floor(progress * progressBarLength)).fill('\u2588').join('') +
                    Array(progressBarLength - Math.floor(progress * progressBarLength)).fill('\u2592').join('');

                    process.stdout.clearLine();
                    process.stdout.cursorTo(0);
                    process.stdout.write(`[${progressBar}] ${Math.floor(currentSeconds / 60)}m ${currentSeconds % 60}s`);
                }

                const intervalId = setInterval(function() {
                    currentSeconds++;
                    updateProgressBar();

                    if (currentSeconds >= totalMinutes * 60 + totalSeconds) {
                    clearInterval(intervalId);
                    console.log(` \n${name} has reached high atmosphere and is currently in orbit!\n`);
                    }
                }, 1000);
            }
        };
        countdown();
    }
}

// If statement abaixo para garatir que o bloco só seja executado se o arquivo space-vehicle.js estiver rodando diretamente pelo Node.js
if (require.main === module) { 
    saturnV = new SpaceVehicle("Saturn V", "Boeing, IBM, Douglas Aircraft Company", "Liquid hydrogen and liquid oxygen", true, 140000, 39000);
    console.log(saturnV);
    saturnV.showSpecs();
    saturnV.reachMaxSpeed();
    saturnV.liftOff();
}

module.exports = SpaceVehicle;