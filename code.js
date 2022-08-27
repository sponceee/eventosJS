/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */



function obtenerDatosDelUsuario() {
    alert("Hola, ingresa los siguientes datos!"),
    datosPersona.nombre = prompt("Nombre:").toLowerCase();
    let edad = parseInt(prompt("Anio de nacimiento"));
    datosPersona.edad= (2022-edad);
    datosPersona.ciudad= prompt("Ciudad").toLowerCase();
    let interesJs = confirm("Te interesa Javascript?");
    datosPersona.interesPorJs = interesJs ? "si" : "no";
};

obtenerDatosDelUsuario();


function renderizarDatosUsuario() {

document.getElementById("nombre").innerText= datosPersona.nombre;
document.getElementById("edad").innerText= datosPersona.edad;
document.getElementById("ciudad").innerText= datosPersona.ciudad;
document.getElementById("javascript").innerText= datosPersona.interesPorJs;

}

renderizarDatosUsuario();

  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
function recorrerListadoYRenderizarTarjetas() {


listado.map((datos)=>{

  return fila.innerHTML +=   ` 
  <div class="caja"> 
  <img src= ${datos.imgUrl} alt=${datos.lenguajes}>
  <p class="lenguajes">${datos.lenguajes} </p>
  <p class="bimestre">${datos.bimestre} </p>
  
  </div>`
  
  
   
   });
  
};

recorrerListadoYRenderizarTarjetas();


function alternarColorTema() {

  let sitio = document.getElementById("sitio");

  sitio.classList.toggle("dark")

};



window.addEventListener("keypress", function(e){

  let sobremi= document.querySelector("#sobre-mi");

  if (e.key == "f"){


    sobremi.classList.toggle("oculto");


  }

})
