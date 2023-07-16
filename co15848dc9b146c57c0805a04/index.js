const hex = document.getElementById("hex-colors");
let pal = document.getElementById("palettes").value;

// All the event listeners on the app including the callback functions
document.getElementById("btn").addEventListener("click", generateColors);
document.querySelector(".change").addEventListener("change", chnage);
function generateColors() {
  const color = document.getElementById("colors").value;
  const scheme = color.slice(1, 7); //Extracting the "#" from the default hex code on the input value
  render(scheme); // Passing the argument here to finialzie the data to be rendered
}

function chnage(e) {
  pal = e.target.value;
}

/* Requesting and rendering function that renders the values when the server access the api
data to the client 
*/
function render(color) {
  fetch(`https://www.thecolorapi.com/scheme?hex=/${color}&mode=${pal}&count=6`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let element = ``;
      for (let color of data.colors) {
        element += `
         <div class="container">
             <img 
             class="images"
             src="${color.image.bare}" 
             alt="colors" />
          <h2 class="title">${color.hex.value}</h2>
        </div>
         `;
        hex.innerHTML = element;
      }
    });
}
