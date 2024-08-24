const carBut = document.getElementById('car-but');
const carBlock = document.getElementById('Careere');
carBut.addEventListener(
    'click',
    function(e){
        // if(@MediaQuery(max-width: "400px")){
        carBlock.style.display="block";
        carBut.style.display="none"
}
);
carBlock.addEventListener(
    'click',
    function(){
        carBlock.style.display="none";
        carBut.style.display="block"
    }
)
const navButs = document.getElementsByClassName("butt");
const navtab = document.getElementsByClassName("tab");
const proBut =document.getElementsByClassName("pro-button");
const projects =document.getElementsByClassName("project1")

function clickBut(tabname){
    for(navbut of navButs){
        navbut.classList.remove("active-but");
    }
    for(navtabs of navtab){
        navtabs.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-but");
    document.getElementById(tabname).classList.add("active-tab");
}

function clickProject(projectname){
    for(probut of proBut){
        probut.classList.remove("active-pro");
    }
    for(project of projects){
        project.classList.remove("active-proslide"); 
    }
    event.currentTarget.classList.add("active-pro");
    document.getElementById(projectname).classList.add("active-proslide");
}
// for(i=0;i<=navButs.length;i++){
//     navButs.addEventListener(
//         'click',
//         function(e){
//             console.log(e.traget);
//         }
//     )
// }
const moreBut=document.getElementById("outerbut");
const closeBut=document.getElementById("outerbut2");
const hiddenProjects = document.getElementById("hiddenproject");
moreBut.addEventListener(
    'click',
    function(e){
        hiddenProjects.style.display="flex";
        moreBut.style.display="none";
        closeBut.style.display="block";
    }
);
closeBut.addEventListener(
    'click',
    function(e){
        hiddenProjects.style.display="none";
        moreBut.style.display="block";
        closeBut.style.display="none";
    }
);
