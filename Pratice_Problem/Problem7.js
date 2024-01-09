// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let prices = [250, 645, 300, 900, 50];

// Here we can't use for off loop as it give us the value not the index but to change something we need index of the array.
for(let i = 0; i<prices.length; i++)
{
    prices[i] = prices[i] * 0.9;
}

for(let price of prices)
{
    console.log(`The new prices are: ${price}`);
}


//You can also do this question in this way

let items = [250, 645, 300, 900, 50];
let index = 0;
for(let val of items)
{
    console.log(`value at index ${index} = ${val}`);
    let offer = val/10;
    items[index] = items[index] - offer;
    console.log(`value after offer = ${items[index]}`);
    index++;
}

