@classDecorator
class Boat { 
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('ooops, boat was sunk for good!')
  pilot(@parameterDecorator speed: string, @parameterDecorator boatWhatever: string): void {
    if( speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing to see here')
    }

    throw new Error();
    console.log('swish');
  }
}

function classDecorator(constructor: typeof Boat){
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator ( target: any, key: string) {
  console.log(key);
}

// decorator factory - return a function
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
   const method = desc.value;

   desc.value = function() {
     try {
       method();
     } catch (e) {
       console.log(errorMessage);
     }
   };
 }
}

// new Boat().pilot();


