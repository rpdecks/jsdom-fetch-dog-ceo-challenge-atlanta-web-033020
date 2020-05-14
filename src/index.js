// add event listener for page load
document.addEventListener('DOMContentLoaded', (e) => {
    getImages();
    getBreeds();
    console.log('DOM fully loaded and parsed');
});

console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getImages(e){
    fetch(imgUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(dogObj){
        rendersDog(dogObj);
    })
    .catch(function (err){
        console.error(err)
    })
}

function rendersDog(dogObj){
    // Get the image ary from the data
    let imgAry = dogObj.message
    let imgParent = document.getElementById('dog-image-container')
    for (let i = 0; i < imgAry.length; i++){
        // Create an element => img tag
        let imgTag = document.createElement('img')
        // Set the source => image source
        imgTag.src = imgAry[i]
        console.log(imgTag);
        imgParent.appendChild(imgTag)
    };
}

function getBreeds(e){
    fetch(breedUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(breedObj){
        rendersBreed(breedObj);
    })
    .catch(function (err){
        console.error(err)
    })
}

function rendersBreed(breedObj){
    // Get the image ary from the data
    let breedAry = breedObj.message;
    let listParent = document.getElementById('dog-breeds')
    // loop over outer array to get all the breeds on the page
    for (let breed in breedAry) {
        // Create an element => img tag
        let listItem = document.createElement('li')
        let ulTag = document.createElement('ul')
        // Set the source => image source
        listItem.innerText = breed
        // loop over outer array to get all the breeds on the page
        breedAry[breed].forEach(function(subBreed){
            let subLi = document.createElement('li')
            subLi.innerText = subBreed
            // attach to the UL tag
            ulTag.appendChild(subLi)
    })
        // attach to the container 
        listParent.appendChild(listItem)
        // attach to the li tag
        listItem.appendChild(ulTag)
    }
};


// function arrayBreeds(array){
//     let result = [];
//     for(i = 0; i < array.length; i++){
//         if (Array.isArray(result[i])) {
//             arrayBreeds(result[i])
//         } else {

//         }

//     }
// }

// function criteriaFn(n) {
//     return (typeof n === 'number' && n > 5);
// }

// // function find(array, criteriaFn) {
// function arrayBreeds(array){
//     let current = array
//     let next = []
//     while (current || current === 0) {
// //       if (criteriaFn(current)) {
// //         return current
// //       }
// //       if (Array.isArray(current)) {
// //         for (let i = 0; i < current.length; i++) {
// //           next.push(current[i])
// //         }
// //       }
// //       current = next.shift()
// //     }
// //     return null
// }