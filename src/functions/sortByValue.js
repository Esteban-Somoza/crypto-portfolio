let sortByValue = function (array) {
    try {
        let sorted = array.sort((a, b) => a.value - b.value
        ).reverse()
        return sorted
    } catch (error) {

    }
}

export default sortByValue
