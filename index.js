const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);

document.addEventListener('scroll', scrollPage);

function navToggle() {
	btn.classList.toggle('open');
	overlay.classList.toggle('overlay-show');
	document.body.classList.toggle('stop-scrolling');
	menu.classList.toggle('show-menu');
}

// EXECUTE COUNTUP FUNCTION WHEN USER SCROLLS DOWN THE PAGE
function scrollPage() {
	const scrollPos = window.scrollY;
	// console.log(scrollPos);

	// execute countUp function when user scrolls down past 100px
	if (scrollPos > 100 && !scrollStarted) {
		countUp();
		scrollStarted = true;
	} else if (scrollPos < 100 && scrollStarted) {
		reset();
		scrollStarted = false;
	}
}

function countUp() {
	counters.forEach((counter) => {
		// console.log(counter);
		counter.innerText = '0';

		const updateCounter = () => {
			// GET COUNT TARGET
			const target = counter.getAttribute('data-target');
			// console.log(target);

			// GET CURRENT COUNTER VALUE
			const c = +counter.innerText;

			// CREATE AN INCREMENT
			const increment = target / 100;

			// IF COUNTER IS LESS THAN TARGET, ADD INCREMENT
			if (c < target) {
				// ROUND UP AND SET COUNTER VALUE
				counter.innerText = `${Math.ceil(c + increment)}`;

				// KEEP RUNNING EVERY 75 MILISECOND
				// AND RUN TILL THIS ISN"T TRUE ANYMORE
				setTimeout(updateCounter, 75);
			} else {
				counter.innerText = target;
			}
		};

		updateCounter();
	});
}

function reset() {
	counters.forEach((counter) => (counter.innerHTML = '0'));
}

// countUp();
