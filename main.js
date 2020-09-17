

// Global Variables
var antiEnergy = 0;
var energy = 0
var engines = 0;
var currentStage = 2;
var resets = 17;
var resetThreshold = 178 + Math.floor(Math.pow(1.2, resets));


//Global Functions
function antiEnergyTick(number){
    antiEnergy = antiEnergy + number;
    document.getElementById("antiEnergy").innerHTML = antiEnergy;
}

function antiEnergyClick(number){
    if(antiEnergy > 0){
        antiEnergy = antiEnergy - number;
        document.getElementById("antiEnergy").innerHTML = antiEnergy;
    }
};

function energyClick(number){
    energy = energy + number;
    document.getElementById("energy").innerHTML = energy;
};

function reset(){
 if(antiEnergy > resetThreshold){
    antiEnergy = 0;
    energy = 0;
    engines = 0;
    resets = resets + 1;
    resetThreshold =  178 + Math.floor(Math.pow(1.2, resets));
    document.getElementById('resets').innerHTML = resets - 17;
    document.getElementById('resetThreshold').innerHTML = resetThreshold;
    }
}

function buyEngine(){
    var engineCost = Math.floor(10 * Math.pow(1.1, engines));       // computes engine cost
    if(energy >= engineCost){                                       // checks affordability
        engines = engines + 1;                                      // increments engines
        energy = energy - engineCost;                               // spends energy
        document.getElementById('engines').innerHTML = engines;     //updates the number of engines for the user
        document.getElementById('energy').innerHTML = energy;       //updates the energy amount for the user
    };
    var nextCost= Math.floor(10 * Math.pow(1.1, engines));          // computes next cost
    document.getElementById('engineCost').innerHTML = nextCost;     // updates engine cost
};

function buildingTick(){
    energyClick(engines);
}

// Game loop
window.setInterval(function(){

    antiEnergyTick(currentStage); // base of the game
    reset();
    buildingTick();

}, 1000);