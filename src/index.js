window.addEventListener("DOMContentLoaded", function(e){
    
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp=>resp.json())
    .then(json=> {
        let div =  document.getElementById("dog-image-container")
        for(let i=0; i < json["message"].length; i++){
            let img = document.createElement("img");
            img.src = json["message"][i]
            div.append(img)
        }
        
    })


    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp=>resp.json())
    .then(json=> {
        let ul =  document.getElementById("dog-breeds")
        let dogs = Object.keys(json["message"])
        console.log(dogs)
        for(let i=0; i < dogs.length; i++){
            let li = document.createElement("li");
            li.innerText = dogs[i]
            ul.append(li)
        }
    })

    document.addEventListener("click", function(e){
        if (e.target.tagName == "LI"){
            e.target.style.backgroundColor = "red";
        }
    })

    const input = document.getElementById('breed-dropdown');
    document.addEventListener('input', updateValue);

    function updateValue(e) {
      fetch("https://dog.ceo/api/breeds/list/all")
      .then(resp=>resp.json())
      .then(json=> {
          let ul =  document.getElementById("dog-breeds");
          ul.innerHTML = "";
          let letter = e.target.value;
          let dogs = Object.keys(json["message"]);
          for(let i=0; i < dogs.length; i++){
              if (dogs[i].charAt(0) === letter) {
                let li = document.createElement("li");
                li.innerText = dogs[i]
                ul.append(li)
              }
          }
      })

    }

})
