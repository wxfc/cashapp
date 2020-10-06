const money = {
  fiveCents: 20,
  tenCents: 10,
  twentyCents: 10,
  fiftyCents: 10,
  oneDollar: 10,
  twoDollars: 6,
  fiveDollars: 10,
  tenDollars: 10,
  twentyDollars: 6,
  fiftyDollars: 5
};



function register(total, given, arr) {
  for (let key in money) {
    arr.forEach(amount => {
      if (amount === key) {
        money[key]++
      };
    })
  }
  
  let changeReturned = given - total;
  
};

console.log(register(55, 60, ['fiftyDollars','tenDollars']));