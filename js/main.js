//ex9_1();
ex10_3();
// ex11_0();
//ex11_1();
// ex11_6();
// ex12_4();
// ex15();

/*
    Steak dinners are $25.60 each, but if you buy two, you get the third for
     free. Get the quantity as input, and output the totalSteakPrice price, and the
     number of free steaks!
     Mushroom sauce is an extra $2, but the free steaks don't get charged for sauce.
     Get the number of mushroom sauce servings as another input, and adjust
     the totalSteakPrice.
*/
function ex10_3() {

    var STEAK_PRICE = 25.00,
        MUSHROOM_SAUCE_PRICE = 2,

        quantity = prompt("Please enter a quantity."),
        sauceQuantity = prompt("Please enter a number of sauces."),

        totalSteakPrice = getTotalPrice(quantity),
        numberOfFreeSteaks = getNumberOfFreeSteaks(quantity),
        totalSaucePrice = getTotalSaucePrice(sauceQuantity);

    function getNumberOfFreeSteaks(quantity) {
        return Math.floor(quantity / 2);
    }
    function getTotalSaucePrice(quantity) {
        return quantity * MUSHROOM_SAUCE_PRICE;
    }
    function getTotalPrice(quantity) {
        return quantity * STEAK_PRICE;
    }
    alert("*Total is: $" + (totalSteakPrice + totalSaucePrice) + "\n*Number of free steaks is: " +
        numberOfFreeSteaks);

}

/**
 * Model an application for bars around Christchurch.
 * A user can:
 * 1. View a list of bars
 * 2. Book an event at the party
 */
function ex15() {

    //bars data
    let bars = [{
        name: "Fred's Bar",
        capacity: 3000,
        address: {
            line1: "52 Colombo St",
            line2: "",
            city: "Christchurch"
        }
    }, {
        name: "Mary's Bar",
        capacity: 2000,
        address: {
            line1: "100 Colombo St",
            line2: "",
            city: "Christchurch"
        }
    }];

    //new address
    let christchurchBranch = {
        line1: "12 Colombo St",
        line2: "",
        city: "Christchurch"
    };

    //new address property
    christchurchBranch.postalCode = '4507';

    //new bar
    let bar = {
        name: "Bob's Bar",
        capacity: 1000,
        address: christchurchBranch,
        hostParty: function (party) {
            if (party.noOfGuests > this.capacity) {
                console.error('Too many guests. Sorry...');
            } else {
                console.log(`You're booked! See you at ${this.address.line1}, 
                 ${this.address.city}`);
            }
        }
    };

    //new party
    let party = {
        noOfGuests: 1100,
        date: '21 November 2019'
    }

    //add bar to list of bars
    bars.push(bar);

    //get a list of bars
    console.log('Bars in Christchurch:')
    bars.forEach(function (bar) {
        console.log(bar.name);
    });

    //host a party
    bar.hostParty(party);
}

/**
 * Write a function that 'disemvowels' a string. Return the input string missing 
 * the characters 'AEIOUaeiou'. "Banana" -> "Bnn".
 */
function ex12_4() {
    const vowels = 'AEIOUaeiou';

    let message = 'Hello World';

    let disemvoweled = disemvowel(message);
    console.log('Result is: ' + disemvoweled);

    function disemvowel(msg) {
        let result = '';
        for (let i = 0; i < msg.length; i++) {
            const letter = msg.charAt(i);
            if (vowels.indexOf(letter) === -1) {
                result += msg.charAt(i);
            }
        }
        return result;
    }
}

/**
 * Make a Christmas tree out of asterisks.
 */
function ex11_6() {
    let leavesEl = document.querySelector('.xmas-tree__leaves');
    let noOfRows = 10;
    let leavesHTMLString = '';
    for (let i = 1; i < noOfRows; i++) {
        for (let j = 0; j < i; j++) {
            leavesHTMLString += '*'
        }
        leavesHTMLString += '<br>';
    }
    leavesEl.innerHTML = leavesHTMLString;
}

/**
 * Make a loop that outputs an asterisk * for every 
 * character in a string.
 */
function ex11_1() {
    let message = 'ijhsdihds';
    let asterisks = '';
    for (let i = 0; i < message.length; i++) {
        asterisks += '*';
    }
    console.log(asterisks);
}

/**
 * Test loops
 */
function ex11_0() {

    let ages = [2, 5, 10, 26, 56, 78];

    console.log('First index is: ', ages[0]);

    console.log('### WHILE LOOP ###');

    let i = 0;
    while (i < ages.length) {
        console.log(ages[i]);
        i++;
    }

    console.log('### FOR LOOP ###');

    for (let i = 0; i < ages.length; i++) {
        const age = ages[i];
        console.log(age);
    }

    console.log('### FOREACH LOOP ###');

    ages.forEach(function (age) {
        console.log(age);
    })

    console.log('### FOREACH LOOP WITH INDEX ###');

    ages.forEach(function (age, i) {
        console.log('Age: ', age);
        console.log('Index: ', i);
    })
}

/**
 * Coffees are $3.50 each, but if you order more than 10, 
 * you get a 15% discount. Write a program that asks for the 
 * quantity and correctly calculates the total after discount.
 */
function ex10_1() {

}

/**
 * Ask a user for their year of birth. Work out their age in years.

If their age is less than 18, tell the user to go to the beach.
If their age is between (and including) 18 and 65 then tell the user to go to work.
If their age is 65 or greater, then tell them to go play bingo.
 */
function ex9_1() {
    let yearOfBirth = prompt('What is your year of birth?');
    let age = getAge(yearOfBirth);

    console.log('The message is: ' + getMessage(age));

    /**
     * Get a message.
     * @param {*} age 
     */
    function getMessage(age) {
        if (age < 18) {
            return 'Go to the beach';
        } else if (age >= 18 && age <= 65) {
            return 'Go to work';
        } else {
            return 'Go play Bingo';
        }
    }
    /**
     * Get age.
     * @param {*} birthYear 
     */
    function getAge(birthYear) {
        let currentYear = new Date().getFullYear();
        return currentYear - parseInt(birthYear);
    }
}
