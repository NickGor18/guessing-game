class GuessingGame {
    constructor() {
        this.min = Number.MAX_SAFE_INTEGER;
        this.max = Number.MIN_SAFE_INTEGER;
        this.last_guess = 0;
    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
        var sum=this.max+this.min;
        this.last_guess=Math.floor((sum+sum%2)/2);
        return (this.last_guess);
    }

    lower() {
        this.max=this.last_guess;
    }

    greater() {
        this.min=this.last_guess;
    }
}

module.exports = GuessingGame;
