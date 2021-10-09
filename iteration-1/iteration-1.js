// 1.1--------------------------------------------------->
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const $$ul = document.createElement("ul");
document.body.appendChild($$ul);

for (let countri of countries) {
  const $$li = document.createElement("li");
  $$li.textContent = countri;
  $$ul.appendChild($$li);
};

// 1.2--------------------------------------------------->
const $$paragraph = document.querySelector(".fn-remove-me");
$$paragraph.remove();

// 1.3--------------------------------------------------->
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const $$div = document.querySelector('[data-function="printHere"]');
const $$ulTwo = document.createElement("ul");
$$div.appendChild($$ulTwo);

for (let car of cars) {
  const $$li = document.createElement("li");
  $$li.innerHTML = car;
  $$ulTwo.appendChild($$li);
};

// 1.4--------------------------------------------------->
//Almacenamos los divs que necesitemos en un array para añadirlos todos a la vez.

const countries2 = [
  { title: "Random title-1", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title-2", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title-3", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title-4", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title-5", imgUrl: "https://picsum.photos/300/200?random=5" },
];

//Al crear los nodos dentro del bucle y tener 5 objetos se crea cada nuevo nodo por cada iteración
for(let countrie of countries2){
    const $$div = document.createElement('div');
    document.body.appendChild($$div);
    const $$h4Title = document.createElement('h4');
    $$h4Title.innerHTML = countrie.title;
    $$div.appendChild($$h4Title);
    const $$h4Image = document.createElement('img');
    $$h4Image.src = countrie.imgUrl;
    $$div.appendChild($$h4Image);
};

// 1.5--------------------------------------------------->
//Creación del boton
const $$btn = document.createElement('button');
$$btn.classList.add('b-btn');
$$btn.innerHTML = 'Delete last';
document.body.appendChild($$btn);
//Evento
$$btn.addEventListener('click', removeImage);
//Función para eliminar la imagen y añadir un texto
function removeImage(){
    const $$lastImg = document.querySelector('[src="https://picsum.photos/300/200?random=5"]');
    $$lastImg.remove();
    const $$span = document.createElement('span');
    $$span.innerHTML = 'Deleted';
    const $$div = document.querySelectorAll('div');
    $$div[5].appendChild($$span).style = 'font-size: 60px';
};

// 1.6--------------------------------------------------->

const $$allImg = document.querySelectorAll('img');

let countBtn = 1;
for(let img of $$allImg){
    const $$allButtons = document.createElement('button');//Se crean tantos botones como imagenes que existan.
    document.body.appendChild($$allButtons);
    $$allButtons.innerText = `Random ${countBtn}`;
    countBtn++;//Incrementamos por cada imagen el numero del contador.
    $$allButtons.addEventListener('click', removeImages);
    // Funcion para eliminar las imagenes
    function removeImages(){
        img.remove();
    };
};




