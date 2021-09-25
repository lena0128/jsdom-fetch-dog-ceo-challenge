console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
    fetchDogImage();
    fetchBreeds();
    filterNames(); 
})

function fetchDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(r => r.json())
    .then(data => renderImages(data));
}

function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(r => r.json())
    .then(json => renderBreed(json));
}

function renderImages(data) {
    data.message.forEach(function(oneImage){
      const image = document.createElement('img');
      const ul = document.querySelector('#dog-image-container');
      image.src = oneImage;
      ul.append(image);
    })
  }

function renderBreed(json) {
    for (let breedLink in json.message ) {
      const breed = document.createElement('li');
      const ul = document.querySelector('#dog-breeds');
  
  
      if (json.message[breedLink].length === 0) {
        const breed = document.createElement('li');
        breed.className = 'links';
        breed.innerText = breedLink;
        breed.addEventListener('click', function(){
          breed.style.color = '#FBBF29';
        });
        ul.append(breed);
      } else {
        json.message[breedLink].forEach(function(innerBreed){
          const breed = document.createElement('li');
          breed.className = 'links';
          breed.innerText = `${innerBreed} ${breedLink}`;
          breed.addEventListener('click', function(){
            breed.style.color = '#FBBF29';
          });
          ul.append(breed);
        })
      }
    }
  }


  function filterNames() {
    const dropDown = document.querySelector('#breed-dropdown');
    dropDown.addEventListener('change', function(e){
        const listOfAll = document.querySelectorAll('li')
        listOfAll.forEach(function(breed){
          if (dropDown.value === breed.innerText.charAt(0) ) {
            breed.style.color = 'red'
            breed.style.display = 'block'
          } else {
            breed.style.display = 'none'
          }
        })
      })
  }