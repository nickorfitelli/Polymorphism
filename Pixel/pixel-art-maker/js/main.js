function changeColor(id) {
    var pixel = document.getElementById(id);
    console.log(pixel)
    pixel.style.backgroundColor = "red";
    console.log("ok")
  }

  var createGrid = function(){
    var gridHolder = document.createElement("div");
    gridHolder.className = "wrapper";
    document.body.appendChild(gridHolder);

      for (let index = 0; index < 1024; index++) {
        var newDiv = document.createElement("div");
        newDiv.id = index;
        newDiv.className = "pixel"
        gridHolder.appendChild(newDiv);
      }

      document.querySelectorAll("div.pixel").forEach(item =>
        {
       item.addEventListener('click', event => 
       {
         item.style.backgroundColor = "red";
       })
     })
    
}

createGrid();

