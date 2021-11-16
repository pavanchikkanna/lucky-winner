const luckyWinner = (names, k = 1) => {
    /*
    The Algorithm Explaination:
    
    step1: shuffle the order of items present in given array(names)
    step2: select first K items from shuffled array

    shuffling of array is based on the https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
    */

    if (!Array.isArray(names)) {
        throw new TypeError(`Expected an array, got ${typeof names}`);
    }
    N=names.length
    if (k < 1 || k > N) {
        throw new Error("K should in range of [1,N]")
    }
    for (let index = N - 1; index > 0; index--) {
		const newIndex = Math.floor(Math.random() * (index + 1));
		[names[index], names[newIndex]] = [names[newIndex], names[index]];
	}
    return names.slice(0,k)
}

module.exports = luckyWinner