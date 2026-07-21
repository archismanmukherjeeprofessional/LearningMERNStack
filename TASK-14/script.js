let num1 = 153;
let num2 = 97;
let num3 = 91;
let num4 = 139;
let num5 = 371;

function analyzeNumber(n) {
  console.log("Number :- ", n);
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum = sum + i;
  }
  console.log("The Sum of first n numbers: ", sum);
  console.log("Multiplication Table: ");
  let m = 1;
  for (i = 1; i <= 10; i++) {
    m = i * n;
    console.log(n + "X" + i + "=" + m);
  }
  let copy = n;
  let d = 0;
  let s = 0;
  while (n > 0) {
    d = n % 10;
    s = s + d;
    n = Math.floor(n / 10);
  }
  console.log("Sum of Digits : ", s);
  d = 0;
  s = 0;
  n = copy;
  while (n > 0) {
    d = n % 10;
    s = s + d ** 3;
    n = Math.floor(n / 10);
  }
  if (s == copy) {
    console.log("Is it an Armstrong number? Yes");
  } else {
    console.log("Is it an Armstrong number? No");
  }
  let primeFlag = 0;
  n = copy;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      primeFlag++;
    }
  }
  if (primeFlag == 2) {
    console.log("Is it an Prime number? Yes");
  } else {
    console.log("Is it an Prime number? No");
  }
  n = copy;
  let factors = "";

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      if (i === n) {
        factors += i;
      } else {
        factors += i + ", ";
      }
    }
  }
  console.log("Factors: ", factors);
}

analyzeNumber(num1)
analyzeNumber(num2)
analyzeNumber(num3)
analyzeNumber(num4)
analyzeNumber(num5)
