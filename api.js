/* let url ='https://pokeapi.co/api/v2/pokemon';

fetch(url)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => console.log(error))

    const showData=(data) => {
        console.log(data)
        let body ='';
        //bucle para crear filas según el largo de data
        for(let i=0; i<data.length;i++){
            body += `<tr><td>${data[i].name}</td></tr>
            <tr><td>${data[i].url}</td></tr>`
        }
        document.getElementById('data').innerHTML=body;
        
    } */

    const apiData ={
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon',
        id: '25'
    }
    const {url, type, id} = apiData;
    const apiUrl = `${url}${type}/${id}`;

    fetch(apiUrl)
        .then((data)=> data.json())
      
        .then( (pokemon)=> generateHtml(pokemon) )

    const generateHtml = (data) => {
        console.log(data)
        const html =`
        <div class="name">${data.name} </div>
        <img src=${data.sprites.front_default}>
        <div class="details">
            <span>Height: ${data.height}</span>
            <span>Weight: ${data.weight}</span>
            <span>Base Experience: ${data.base_experience}XP</span>
        </div>
        `
    
          
        
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML=html; 
}