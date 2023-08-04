
function randomLocation(max) {
    return Math.floor(Math.random() * max);
  }
  

const rickLocation = async (loc) =>{
    let url="https://rickandmortyapi.com/api/location/"+loc;
    const apiLocation = await fetch(url);
    const dataLocation = await apiLocation.json();

    console.log(dataLocation)

    let residents = dataLocation["residents"]

    if( residents!= 0 ){
    for (let index = 0; index <= 5; index++) {
        let character = dataLocation["residents"][index]; 
         
        const apiCharacter = await fetch(character);
        const dataCharacter = await apiCharacter.json();

        console.log(dataCharacter)

        divRes=document.querySelector("#resultado");

        dataCharacter.result.map(item=>{
            divItem=document.createElement('div')
            divItem.innerHTML=`<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${item.image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`

          divRes.appendChild(divItem);
        })
    }
  
}else{
    console.log('No tiene residentes')
}


}

rickLocation(randomLocation(126))


