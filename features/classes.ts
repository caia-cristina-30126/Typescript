class Vehicle {

  constructor(public color: string) {}

  protected  honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vehicle{
   // inheritance; we can override methods, where Car is a child of Vehicle

   constructor(public wheels: number, color: string){
     super(color);
   }
   private drive(): void {
    console.log('whatever');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }

} 

const car = new Car(3, 'red');
//vehicle.drive();
//vehicle.honk();

car.startDrivingProcess();


const vehicle = new Vehicle('orange');
console.log(vehicle.color);


