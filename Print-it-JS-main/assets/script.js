const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slide = ["./assets/images/slideshow/slide1.png", "./assets/images/slideshow/slide2.png", "assets/images/slideshow/slide3.png", "assets/images/slideshow/slide4.png"]

let banner = document.getElementById("banner")
let bannerImg = document.querySelector(".banner-img")
let arrowLeft = document.querySelector(".arrow-left")
let arrowRight = document.querySelector(".arrow-right")
let i = 0
arrowLeft.addEventListener ("click", () => {
	i++
	slide[i]
	bannerImg.src = slide[i]
	console.log("ça marche a gauche")
	if (slide[i] === undefined){
		bannerImg.src = slide[3]
	}
})
arrowRight.addEventListener ("click", () => {
	i++
	slide[i]
	bannerImg.src = slide[i]
	if (slide[i] === undefined){
		bannerImg.src = slide[0]
	}
})