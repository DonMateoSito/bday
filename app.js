

let c = `litery: a=3,e=7,g=3,i=3,j=1,k=2,n=2,o=3,p=1,s=6,t=3,w=1,z=4`;

const vid = document.querySelector('.video');
const divToOpen = document.querySelector('.openMe');
const btn = document.querySelector('.open-div');
const im1 = document.querySelector('.im1');
const im2 = document.querySelector('.im2');
const im3 = document.querySelector('.im3');
const im4 = document.querySelector('.ukryty');




function openMe(){
    divToOpen.style.display == "none";
    // if (divToOpen.style.display === "block"){
        
    //     console.log("jeden");
    // } 
    // else{
    //     divToOpen.style.display == "block";
    //     console.log("dwa");
    // }
    console.log(divToOpen);
}
function nowYouSeeMe(e) {
    if (divToOpen.style.display === "block") {
        divToOpen.style.display = "none";
        e.target.textContent = "Hehe";
        vid.pause();

        while (im1.firstElementChild) {
            im1.removeChild(im1.firstElementChild);
        }
        while (im2.firstElementChild) {
            im2.removeChild(im2.firstElementChild);
        }
        while (im3.firstElementChild) {
            im3.removeChild(im3.firstElementChild);
        }
        im1.innerHTML = `
        <img src="./IMG/text/H.png" alt="" class="img">
        <img src="./IMG/text/U.png" alt="" class="img">
        <img src="./IMG/text/J.png" alt="" class="img">
        `;
        im2.innerHTML = `
        <img src="./IMG/text/C.png" alt="" class="img">
        <img src="./IMG/text/I.png" alt="" class="img">
    `;
        im3.innerHTML = `
        <img height="80" width="50" src="./IMG/text/W.png" style=' margin-right: 30px;' alt="" class="img">
        <img src="./IMG/text/D.png" alt="" class="img">
        <img src="./IMG/text/U.png" alt="" class="img">
        <img src="./IMG/text/P.png" alt="" class="img">
        <img src="./IMG/text/E.png" alt="" class="img">
    `;
        
        im4.style.display = "block";
        im1.scrollIntoView();
    
        
    } else {
        divToOpen.style.display = "block";
        vid.scrollIntoView();
        vid.play();
        e.target.innerHTML = "<h2>Harder Daddy</h2>";
        
        
    };
}
console.log(im1.lastElementChild);


btn.addEventListener('click', nowYouSeeMe );