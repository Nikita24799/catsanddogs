const cat_btn = document.querySelector('#cat_btn');
const cat_result = document.querySelector('#cat_result');

cat_btn.addEventListener('click', getRandomCat);

function getRandomCat(){
    const url = 'https://api.thecatapi.com/v1/images/search';

    fetch(url)
    .then(response => response.json())
    .then(data=> {
        console.log(data[0].url);
        cat_result.innerHTML = `<img src=${data[0].url} alt="cat"/>`;
    })
}
const dog_btn = document.querySelector('#dog_btn');
const dog_result = document.querySelector('#dog_result');

dog_btn.addEventListener('click', getRandomDog);

function getRandomDog() {
    const url = 'https://images.dog.ceo/breeds/labrador/n02099712_6345.jpg';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data[0].url);
            dog_result.innerHTML = `<img src=${data[0].url} alt="dog"/>`;
        })
}

