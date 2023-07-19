//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=GQ6Y1NE6xocvwK55ouXBWqIQeGzmGkYdb4tlABex&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('h2').innerText = data.title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


// Add 'active' class to the clicked navigation item
const navbarItems = document.querySelectorAll('.navbar li a');

navbarItems.forEach(item => {
  item.addEventListener('click', function() {
    const current = document.getElementsByClassName('active');
    current[0].classList.remove('active');
    this.classList.add('active');
  });
});



// Lg8BftLlyUV6QexumAYgGbR8O3JgsgTUF9Ev9LhJ

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${choice}&api_key=GQ6Y1NE6xocvwK55ouXBWqIQeGzmGkYdb4tlABex