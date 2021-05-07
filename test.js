
const result = Promise.all(Array(10000).fill(null).map((_, i) =>
  fetch("http://localhost:8000", {method: "POST", body: JSON.stringify({ i })}).then(it => console.log(i))
));
