citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ])


  function citiesOnly(array) {
    return array.map(x => x.city)
}


upperCasingStates(['alabama', 'new jersey'])

function upperCasingStates(words) {
  return words.map((element) => {
    let slitword = element.split(' ');
      for (let i = 0; i < slitword.length; i++) {
      slitword[i] = slitword[i].charAt(0).toUpperCase() + slitword[i].substring(1);
  }
  return slitword.join(' ');
  })
}
console.log(upperCasingStates(['alabama', 'new jersey']))




// // fahrenheitToCelsius(['68°F', '59°F', '25°F']) // -> ['20°C', '15°C', '-4°C']

function fahrenheitToCelsius (temp) {
  return temp.map((convert)=> {
    const convertint = parseInt(convert);
    let newtemp = Math.floor((convertint -32) /1.8)
    return newtemp + "°C"
  })
}
console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))





trimTemp([
  { city: 'Los Angeles', temperature: '  101 °F   '},
  { city: 'San Francisco', temperature: ' 84 ° F   '},
])

function trimTemp(trim) {
  return trim.map((spaces)=> {
    spaces.temperature = spaces.temperature.split(' ').join('');
    return spaces
  })
}
console.log(trimTemp([
  { city: 'Los Angeles', temperature: '  101 °F   '},
  { city: 'San Francisco', temperature: ' 84 ° F   '},
]))



tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  }
// ]) // -> ['38°Celsius in Pasadena, California']
