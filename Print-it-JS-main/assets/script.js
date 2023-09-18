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
		let currentImageIndex = 0;
        const bannerImg = document.querySelector('.banner-img');
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');
		const dotsContainer = document.querySelector('.dots')

        function changeImage(index) {
            bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
        }
		function changeText(index){
			textImg.innerHTML = slides[index].tagLine;
		}

		function createDot(index) {
			const dot = document.createElement('span');
			dot.classList.add('dot');
			dot.addEventListener('click', () => {
				currentImageIndex = index;
				changeImage(currentImageIndex);
			})
			dotsContainer.appendChild(dot);
		}

		slides.forEach((slides, index) => {
			createDot(index);
		})

		
		function updateDots(index) {
			const dots = document.querySelectorAll('.dot');
				if (i === index) {
					dots[i].classList.add('dot_selected');
				} else {
					dots[i].classList.remove('dot_selected');
				}
			}


		let textImg = document.querySelector('#banner p');

        arrowLeft.addEventListener('click', () => {
			console.log("la flèche de gauche fonctionne");
            currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
            changeImage(currentImageIndex);
			changeText(currentImageIndex);
        });

        arrowRight.addEventListener('click', () => {
			console.log("la flèche de droite fonctionne");
            currentImageIndex = (currentImageIndex + 1) % slides.length;
            changeImage(currentImageIndex);
			changeText(currentImageIndex);
        });

	
		
