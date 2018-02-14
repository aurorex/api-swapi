const imgApi = document.querySelectorAll('.image-api');

console.log(imgApi);

for (let i = 0;i < imgApi.length;i++) {
  console.log(imgApi[i]);

  imgApi[i].onclick = function() {
    let targetImage = this.getAttribute('data-target'); 
    
    fetch(`https://swapi.co/api/people/${targetImage}`)
      .then((response) => {
        return response.json();
      })
      .then((recurso)=>{
        console.log(recurso);
      // addNews(JSON.parse(recurso));
      });
  };
}

