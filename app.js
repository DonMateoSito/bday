

let c = `litery: a=3,e=7,g=3,i=3,j=1,k=2,n=2,o=3,p=1,s=6,t=3,w=1,z=4`;

const vid = document.querySelector('.video');
const divToOpen = document.querySelector('.openMe');
const btn = document.querySelector('.open-div');



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

btn.addEventListener('click', function(e){
    if (divToOpen.style.display === "block"){
        divToOpen.style.display = "none";
        vid.pause();
    } else{
        divToOpen.style.display = "block";
        vid.scrollIntoView();
        vid.play();
    };
   
    console.log(divToOpen.style.display);
});