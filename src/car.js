
/* 

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Home study Session Day 2
Date: 16 May, 2017.
 
*/

   function Car(name, model, type){
    this.name = name || "General";
    this.model = model || "GM"

    if(type === "trailer"){
        this.type = "trailer";
        this.isSaloon = false;
        this.numOfWheels = 8;
        this.speed = "0 km/h"
    }
    else{
        this.type != "trailer";
        this.isSaloon = true;
        this.numOfWheels = 4;
       
    }
    if (name === "Porshe" || name === "Koenigsegg"){
        this.numOfDoors = 2;

    }
    else{
        this.numOfDoors = 4;
    }

    this.drive = function(speed){
        if (this.type === "trailer"){
            this.speed = 11 * speed + " km/h";
            return this;

        }
        else{
            this.speed = 50 * speed + " km/h";
            return this;
        }
    };
   };
module.exports = Car;