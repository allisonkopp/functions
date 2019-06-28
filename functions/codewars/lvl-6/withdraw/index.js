const withdraw = n => {
  let hundred, fifty, twenty;
  let remainder = n % 100;
  if (remainder % 20 && remainder % 50 && (remainder % 50) % 20 !== 0) {
    hundred = Math.floor(n / 100) - 1;
    fifty = 1;
    twenty = ((n % 100) + 100 - 50) / 20;
  } else {
    hundred = Math.floor(n / 100);
    if ((remainder % 50) % 20 !== 0) {
      fifty = 0;
      twenty = Math.floor(remainder / 20);
    } else {
      fifty = Math.floor(remainder / 50);
      twenty = Math.floor((remainder % 50) / 20);
    }
  }
  return [hundred, fifty, twenty];
};

//tests
console.log(withdraw(40)); //[0, 0, 2]
console.log(withdraw(250)); //[2, 1, 0]
console.log(withdraw(260)); //[2, 0, 3]
console.log(withdraw(230)); //[1, 1, 4]
console.log(withdraw(60)); //[0, 0, 3]
console.log(withdraw(3470)); //[34, 1, 1]
