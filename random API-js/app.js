const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');

cat_btn.addEventListener('click', randomCat);
dog_btn.addEventListener('click', randomDog);


function randomCat() {
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
    });
}

function randomDog() {
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        dog_result.innerHTML = `<img src=${data.url} alt="dog" />`
    });
}