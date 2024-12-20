document.addEventListener('DOMContentLoaded', () => {
	// number of drops created.
	const nbDrop = 858;

	// function to generate a random number range.
	function randRange(minNum, maxNum) {
		return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
	}

	// function to generate drops
	function createRain() {
		const rainContainer = $('.rain');
		for(let i = 1; i < nbDrop; i++) {
			const dropLeft = randRange(0, window.innerWidth);
			const dropTop = randRange(-1000, 1400);

			const drop = $('<div/>', {
				class: 'drop',
				id: 'drop' + i
			}).css({
				left: dropLeft + 'px',
				top: dropTop + 'px'
			});

			rainContainer.append(drop);
		}
	}

	// Make it rain
	createRain();
});