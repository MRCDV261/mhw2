function onHoverNav() {
    const nav = document.querySelector('.nav-sotto-con2');
    const nav2 = document.querySelector('#nav_sopra_flex');
    const flex_item=document.querySelectorAll('.dropdown .flex-item_nav2');
    const flex_item2=document.querySelectorAll('#nav_sopra_flex .flex-item_nav');
    const immagine_cerca= document.querySelector('.flex-item_nav2  .immagine_piccola');
    const cerca_immagine_border= document.querySelector('.nav_sotto_flex2');
    const accedi= document.querySelector('#accedi');

    immagine_cerca.src="Immagini/cerca.svg"; 

    const immagine_bag= document.querySelector('.flex-item_nav2-2  .immagine_piccola');

    immagine_bag.src="Immagini/bag_nera.jpg"; 

    cerca_immagine_border.classList.add('nav_sotto_flex2_java')

    for(let item of flex_item){
        item.classList.add("colorePerJavaNav"); 
    }

    for(let item of flex_item2){
        item.classList.add("colorePerJavaNav2"); 
    }
    
  
    nav.classList.add('hoveredNav');
    nav2.classList.add('hoveredNav');
}

function onHoverNavOut() {
    const nav = document.querySelector('.nav-sotto-con2');
    const nav2 = document.querySelector('#nav_sopra_flex');
    const cerca_immagine_border= document.querySelector('.nav_sotto_flex2');

    const immagine_cerca= document.querySelector('.flex-item_nav2  .immagine_piccola');

    immagine_cerca.src="Immagini/cerca_bianca.svg"; 

    
    
    const immagine_bag= document.querySelector('.flex-item_nav2-2  .immagine_piccola');

    immagine_bag.src="Immagini/bag_bianca.png"; 

    const flex_item=document.querySelectorAll('.dropdown .flex-item_nav2');
    
    const flex_item2=document.querySelectorAll('#nav_sopra_flex .flex-item_nav');

    cerca_immagine_border.classList.remove('nav_sotto_flex2_java')

    for(let item of flex_item){
        item.classList.remove("colorePerJavaNav"); 
    }

    for(let item of flex_item2){
        item.classList.remove("colorePerJavaNav2"); 
    }

    nav.classList.remove('hoveredNav');
    nav2.classList.remove('hoveredNav');

}

let nav_sotto_con2= document.querySelectorAll(".dropdown"); 

for(let item of nav_sotto_con2){
    item.addEventListener('mouseover', onHoverNav);
    item.addEventListener('mouseout', onHoverNavOut);
}






function onClickFrecciaHeader() {
    indice = (indice + 1) % scritte.length;
    testo.textContent = scritte[indice];

    for (let i = 0; i < palline.length; i++) {
        if (i === indice) {
            palline[i].classList.add('pallina-attiva');
        } else {
            palline[i].classList.remove('pallina-attiva');
        }
    }
}

const scritte = [
    "SCONTO EXTRA DEL 10% SU OUTLET, INSERISCI IL CODICE OUTLET10, ACQUISTA ORA",
    "UNISCITI A XPLR PASS E RICEVI IL 10% DI SCONTO SUL TUO PRIMO ORDINE"
];
var indice = 0;

const testo = document.querySelector('.flex-item_header');
const freccia = document.querySelectorAll('.immagine_freccia');
const palline = document.querySelectorAll('.pallina'); 

for (let item of freccia) {
    item.addEventListener('click', onClickFrecciaHeader);
}

palline[indice].classList.add('pallina-attiva');



function accesso(event) {
    const modalView = document.querySelector('#modal-view');
    modalView.style.top= window.pageYOffset + 'px';
    document.body.classList.add('no-scroll');
    modalView.classList.remove('hidden');
}

function fuoriAccesso(event) {
    if (event.target === event.currentTarget) { 
        const modalView = document.querySelector('#modal-view');
        modalView.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }
}

const accedi = document.querySelectorAll('#accedi');

for(let item of accedi){
    item.addEventListener('click', accesso); 
}   
const modalView = document.querySelector('#modal-view');
const X_chiusura= document.querySelector("#chiudi");

modalView.addEventListener('click', fuoriAccesso);
chiudi.addEventListener('click', fuoriAccesso);





function accediXPASS(event) {
    const elemento = document.querySelector('#xplr-pass-logo');
    elemento.classList.add('nascondi');
    const new_h1 = document.createElement('h1');
    new_h1.classList.add('h1-stile_java');
    new_h1.textContent = "Accedi a XPLR PASS per usufruire di sconti esclusivi";
    const daNascondere = document.querySelector('#daNascondere');
    daNascondere.appendChild(new_h1);
    daNascondere.removeEventListener('mouseover', accediXPASS); 
 
}


const daNascondere = document.querySelector('#daNascondere');
daNascondere.addEventListener('mouseover', accediXPASS); 






function passaggioFoto(event){
    event.currentTarget.src= event.currentTarget.dataset.srcAlt; 
  }
  
  function passaggioFotoOut(event){
    event.currentTarget.src= event.currentTarget.dataset.srcOrig; 
  }
  
  const foto=document.querySelectorAll(".immagini-foto-flex-4"); 
  
  for(let item of foto ){
    item.addEventListener('mouseover',passaggioFoto);
    item.addEventListener('mouseout',passaggioFotoOut)
  }


