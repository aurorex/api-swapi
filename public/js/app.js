window.addEventListener('load', function() {
  const imgApi = document.querySelectorAll('.image-api');
  const species = document.querySelector('#species');
  const language = document.querySelector('#language');
  const averageLifeSpan = document.querySelector('#average-life-span');
  const imagePhoto = document.querySelector('#character-img');
  const name = document.querySelector('#character-name');
  const birthYear = document.querySelector('#birth_year');
  // console.log(imgApi);

  for (let i = 0;i < imgApi.length;i++) {
    // console.log(imgApi[i]);

    imgApi[i].onclick = function() {
      let targetImage = this.getAttribute('data-img'); 
      let imageUrl = this.getAttribute('src');
      imagePhoto.setAttribute('src', imageUrl);
      // imagePhoto.appendChild()
      fetch(`https://swapi.co/api/people/${targetImage}`)
        .then((response) => {
          return response.json();
        })
        .then((recurso)=> {
          console.log(recurso);
          name.innerHTML = recurso.name;
          birthYear.innerHTML = recurso.birth_year;
          fetch(recurso.species)
            .then((responseSpecies) => {
              return responseSpecies.json();
            })
            .then((recursoSpecies)=> {
              console.log(recursoSpecies);
              species.innerHTML = recursoSpecies.name;
              language.innerHTML = recursoSpecies.language;
              averageLifeSpan.innerHTML = recursoSpecies.average_lifespan;
            });
        // addNews(JSON.parse(recurso));
        });
    };
  }
});

