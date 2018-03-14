a = [1, 2, 3];
b = [4, 5, 6];

c = [...a, ...b]; // 1

d = c.filter(e => e != 3); // 2

objectD = d.map((v, i) => {val: i}); // 3
product = objectD.reduce((a, b) => a.val * b.val);
prices = { pizza: 30, burger: 20, pasta: 25, juice: 10, fish: 40 };

({pizza, pasta, ...other} = prices) // 4
city = { name: "Zagreb", population: 1000000 }

({cityName, population, destroyed} = city); \\ 6
if(destroyed == undefined) {
  destroyed = false;
}
print(`Pizza costs ${pizza}kn, pasta ${pasta}kn, which is ${pizza + pasta}kn in total`);
