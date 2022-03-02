/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/
let nav = ["1", "2", "3", "4", "5", "6"];
let navLinArr = ["hed", "services", "portfolio", "about", "pricing", "contact"];
let navLin = document.querySelectorAll("header .container .nav ul li");
navLin.forEach(function (ele, i) {
	ele.innerHTML += `<a href="#${navLinArr[i]}">${navLinArr[i]}</a>`;
});
// document.querySelectorAll("a").forEach(function (ele, i) {
// 	console.log(ele.getAttribute("href"));
// 	ele.setAttribute("href", `#${navLinArr[i]}`);
// 	console.log(ele.getAttribute("href"));
// });

let portfolioCat = document.querySelectorAll(".portfolioShow .work");
let catIn = [
	"app",
	"photography",
	"web",
	"print",
	"photography",
	"web",
	"print",
	"app",
];
portfolioCat.forEach(function (ele, i) {
	ele.setAttribute("data-text", `${catIn[i]}`);
});
console.log(imgAin);

// imgAin = imgAll[0].getAttribute("src");
