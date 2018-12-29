const assert = require('assert'); // use for assertions
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Web3 is camel case because it is a constructor
const web3 = new Web3(ganache.provider())// working with an instance

class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

let car;
beforeEach(() => {
    car = new Car();
});

describe('Car', () => {
    it('can park', () => {
        assert.equal(car.park(), 'stopped');
    });
    it('can drive', () => {
        assert.equal(car.drive(), 'vroom');
    });
});