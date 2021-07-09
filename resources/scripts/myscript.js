/* Set the width of the sidebar to 800px (show it) */
function openProject() {
    document.getElementById("mySidepanel").style.width = "800px";
    document.getElementById("mySidepanel").style.opacity = "1";
}
  
  /* Set the width of the sidebar to 0 (hide it) */
function closeProject() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.opacity = "0";
}


function firstProject() {
    openProject();
    document.getElementById('projectTitle').innerHTML = "First project";
    document.getElementById('projectDefinition').innerHTML = "Some info on first project";
    document.getElementById('projectImage').src = 'resources/img/fernando-hernandez-JdoofvUDUwc-unsplash.png';
}

function secondProject() {
    openProject();
    document.getElementById('projectTitle').innerHTML = "Second project";
    document.getElementById('projectDefinition').innerHTML = "Some info on Second project";
    document.getElementById('projectImage').src = "resources/img/maxwell-nelson-taiuG8CPKAQ-unsplash.png";
}

function thirdProject() {
    openProject();
    document.getElementById('projectTitle').innerHTML = "Third project";
    document.getElementById('projectDefinition').innerHTML = "Some info on Third project";
    document.getElementById('projectImage').src = "resources/img/pankaj-patel-u2Ru4QBXA5Q-unsplash.png";
}

function fourthProject() {
    openProject();
    document.getElementById('projectTitle').innerHTML = "Fourth project";
    document.getElementById('projectDefinition').innerHTML = "Some info on Fourth project";
    document.getElementById('projectImage').src = "resources/img/pankaj-patel-u2Ru4QBXA5Q-unsplash.png";
}