const cityCompare = (cityOne, cityTwo) => {
    let cityOneLength = cityOne.length;
    let cityTwoLength = cityTwo.length;
    let shortestCity = Math.min(cityOneLength, cityTwoLength);

    return shortestCity;
}

const cityComparer = new Vue({
    el: '#city-compare',
    data: {
      cityOne: "one",
      cityTwo: "two"
    },
    computed: {
      result: function () {
        const cityOne = this.cityOne
        const cityTwo = this.cityTwo
        return `${cityCompare(cityOne, cityTwo)}`
      }
    }
  })