const randomElement = (array) => {
 let indexRandom = Math.floor(Math.random() * array.length);
    return array[indexRandom];

}

export default randomElement;