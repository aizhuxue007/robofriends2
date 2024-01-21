// try to explain 4 pillars of OOP
// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

class Weather {
    constructor(type, fahrenheit) {
        this._type = type
        this._fahrenheit = fahrenheit
    }

    get type() {
        return this._type;
    }
    
    get fahrenheit() {
        return this._fahrenheit;
    }

    showWeather() {
        return `Todays weather is ${this._type}!`
    }
    
    showFahrenheit() {
        return `Todays temp is ${this._fahrenheit}!`
    }
}

class Cloudy extends Weather {
    constructor(type='cloudy', fahrenheit, howCloudy) {
        super(type, fahrenheit)
        this.howCloudy = howCloudy
    }

    showWeather() {
        return 'this is cloudy'
    }
}

const weather = new Weather('sunny', 98)
const cloudy = new Cloudy(60, 'very cloudy')

console.log(weather.showWeather())
console.log(cloudy.showWeather())