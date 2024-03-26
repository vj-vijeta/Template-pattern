class BeverageMaker {
    brew() {
        throw new Error("Method 'brew' must be implemented by subclasses.");
    }

    addCondiments() {
        throw new Error("Method 'addCondiments' must be implemented by subclasses.");
    }

    makeBeverage() {
        const result = `Boiling water. ${this.brew()}. Pouring into cup. ${this.addCondiments()}.`;
        return result;
    }
}

class CoffeeMaker extends BeverageMaker {
    brew() {
        return "Brewing coffee grounds";
    }

    addCondiments() {
        return "Adding sugar and milk";
    }
}

class TeaMaker extends BeverageMaker {
    brew() {
        return "Steeping the tea";
    }

    addCondiments() {
        return "Adding water and sugar";
    }
}

class LatteMaker extends BeverageMaker {
    brew() {
        return "Brewing coffee";
    }

    addCondiments() {
        return "Adding milk, foam, and sugar";
    }
}

function makeBeverage(type) {
    const beverageMaker = type === 'coffee' ? new CoffeeMaker() : (type === 'tea' ? new TeaMaker() : new LatteMaker());

    const displayElement = document.getElementById('display-output');

    if (displayElement) {
        displayElement.innerText = beverageMaker.makeBeverage();

        // Display a message after 10 seconds
        setTimeout(() => {
            displayElement.innerText = 'Your beverage is ready!';
            // Reset to the initial state after another 2 seconds
            setTimeout(() => {
                displayElement.innerText = '';
            }, 2000);
        }, 10000);
    }
}