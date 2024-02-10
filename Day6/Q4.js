class UberPrice {
    constructor() {
        this.base = 100; 
        this.perKM = 13;
    }

    calculator(distance) {
            let outputAmount = this.base + (distance * this.perKM);
             return outputAmount;
   }

};
  let Passenger = new UberPrice
  let distance = 50;
    
   let finalAmt =  Passenger.calculator(distance);

    console.log(`Rs:${finalAmt}`);