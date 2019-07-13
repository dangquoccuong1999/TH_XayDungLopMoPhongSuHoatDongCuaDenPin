let Battery = function (energy) {
    this.energy = energy
    this.setEnergy = function (energy) {
        this.energy = energy;
    }
    this.getEnergy = function () {
        return this.energy;
    }
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--
        }
    }
}
let FlashLamp = function () {
    this.light = function () {
        if (this.status) {
            alert("Lighting");
           this.pin.decreaseEnergy();
        }
        else {
            alert("Not lighting");
        }
    }
    this.turnOn = function () {
        if (this.pin.getEnergy() > 0) {
            this.status = true;
        }
    }
    this.turnOff = function () {
        this.status = false;
    }
    this.pin = new Battery(10);
}
let flashLamp = new FlashLamp();

document.write("Battery info:" + flashLamp.pin.getEnergy() + "<br/>");
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.pin.getEnergy() + "<br/>");