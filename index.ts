const prompts = require("prompts");

type Product = {
  title: string;
  price: number;
};

const products: Product[] = [
  {
    title: "Coffee (L)",
    price: 186,
  },
  {
    title: "Coffee (XL)",
    price: 281,
  },
  {
    title: "Hot Chocolate",
    price: 181,
  },
  {
    title: "Tea",
    price: 146,
  },
];

// COINS:
// 2(200), 1(100), 0.5(50), 0.2 (20), 0.1 (10), 0.05 (5), 0.02 (2), 0.01 (1)
const coins: number[] = [200, 100, 50, 20, 10, 5, 2, 1];

(async () => {
  const response = await prompts({
    type: "select",
    name: "product",
    message: "please select your product",
    choices: products,
    // initial: 0
  });

  const selectedProduct: Product = products[response.product];

  console.log(
    products[response.product].title +
      " costs " +
      products[response.product].price +
      " EUR"
  );

  let wallet: number = 0;
  while (wallet < selectedProduct.price) {
    const coin = await prompts({
      type: "select",
      name: "value",
      message: "Insert coin:",
      choices: coins,
      validate: (value: number) =>
        !coins.includes(value) ? "Invalid coin" : true,
    });

    wallet = wallet + coins[coin.value];
  }

  let reminder: number = wallet - selectedProduct.price;

  console.log("Reminder is: " + reminder);

  coins.forEach((coin) => {
    if (reminder <= 0) {
      return;
    }
    // how many times coin fits in reminder
    const times = Math.floor(reminder / coin);
    if (times > 0) {
        if (coin > 99) {
            console.log((coin/100 + " euro coin is returned\n").repeat(times).trim());
        } else {
            console.log((coin + " cents coin is returned\n").repeat(times).trim());           
        }

    }

    reminder = reminder - coin * times;
    
  });

})();
