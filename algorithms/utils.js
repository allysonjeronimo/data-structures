module.exports = function utils() {

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function getFilledArray(length, sorted) {
        const array = []
        for (let i = 0; i < length; i++) {
            array.push(sorted ? i : getRandomArbitrary(0, length - 1))
        }
        return array
    }

    return {
        getRandomArbitrary,
        getFilledArray
    }
}



