/* Set the width of the sidebar to 800px (show it) and open ProjectPanel */
function openProject() {
    document.getElementById("mySidepanel").style.width = "800px";
    document.getElementById("mySidepanel").style.opacity = "1";
    document.getElementById("projectPanel").style.display = "block";
    overlayOn();
}
  
  /* Set the width of the sidebar to 0 (hide it) and hide ProjectPanel*/
function closeProject() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.opacity = "0";
    document.getElementById("projectPanel").style.display = "none";
    overlayOff();
}

/* Opens and closes sidepanel with Certification content */
function openCert() {
    document.getElementById("panelTitle").innerHTML = "Certifications";
    document.getElementById("mySidepanel").style.width = "800px";
    document.getElementById("mySidepanel").style.opacity = "1";
    document.getElementById("certContainer").style.display = "grid";
    overlayOn();
}

function closeCert() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.opacity = "0";
    document.getElementById("certContainer").style.display = "none";
    overlayOff();
}

/* Opens and closes sidepanel with Resume content */
function openResume() {
    document.getElementById("panelTitle").innerHTML = "Resume";
    document.getElementById("mySidepanel").style.width = "800px";
    document.getElementById("mySidepanel").style.opacity = "1";
    document.getElementById("resumeContainer").style.display = "grid";
    overlayOn();
}

function closeResume() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.opacity = "0";
    document.getElementById("resumeContainer").style.display = "none";
    overlayOff();
}

/* Opens anc closes sidepanel with Contacts content */

function openContact() {
    document.getElementById("panelTitle").innerHTML = "Contact me";
    document.getElementById("mySidepanel").style.width = "800px";
    document.getElementById("mySidepanel").style.opacity = "1";
    document.getElementById("contactContainer").style.display = "block";
    overlayOn();
}

function closeContact() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.opacity = "0";
    document.getElementById("contactContainer").style.display = "none";
    overlayOff();
}

/* Toggles overlay On and Off*/
function overlayOn() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.opacity = "0.6";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay").style.opacity = "0";
}

/* Closes the project when clicked anywhere outsie the project */
document.getElementById("overlay").addEventListener('click', function() {
    closeCert();
    closeProject();
    closeResume();
    closeContact();
});

/* Checks if Certificats button is pressed and calls function*/
document.getElementById("certificates").addEventListener('click', openCert);

/* Checks if Resume button is pressed and calls function*/
document.getElementById("resume").addEventListener('click', openResume);

/* checks if Contact Me button is pressed and calls function */
document.getElementById("contact").addEventListener('click', openContact);

/* Checks if Closing icon is pressed and calls function */
document.getElementById("closeIcon").addEventListener('click', function() {
    closeCert();
    closeProject();
    closeResume();
    closeContact();
});


function firstProject() {
    document.getElementById('panelTitle').innerHTML = "First project";
    document.getElementById('projectDefinition').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit facilis amet ab quo, possimus nobis quos. Delectus fugit iusto reiciendis repellat praesentium enim quidem sequi unde facilis, voluptatum eveniet aperiam adipisci maxime officia assumenda, temporibus atque, repudiandae perspiciatis. Aspernatur fuga laudantium facere natus, ullam reiciendis quo? Quam, doloribus asperiores.";
    document.getElementById('projectImage').src = 'resources/img/fernando-hernandez-JdoofvUDUwc-unsplash.png';
    document.getElementById("langUsed").innerHTML = 
                                                    `<li><i class="fab fa-html5"></i></li>
                                                    <li><i class="fab fa-css3-alt"></i></li>
                                                    <li><i class="fab fa-js-square"></i></li>
                                                    <li><i class="fab fa-react"></i></li>
                                                    <li><i class="fab fa-sass"></i></li>`;
    document.getElementById("livePreviewLink").href = "https://twitter.com";
    document.getElementById("githubLink").href = "https://github.com";
    openProject();
}

function secondProject() {
    document.getElementById('panelTitle').innerHTML = "Second project";
    document.getElementById('projectDefinition').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit facilis amet ab quo, possimus nobis quos. Delectus fugit iusto reiciendis repellat praesentium enim quidem sequi unde facilis, voluptatum eveniet aperiam adipisci maxime officia assumenda, temporibus atque, repudiandae perspiciatis. Aspernatur fuga laudantium facere natus, ullam reiciendis quo? Quam, doloribus asperiores.";
    document.getElementById('projectImage').src = "resources/img/maxwell-nelson-taiuG8CPKAQ-unsplash.png";
    document.getElementById("langUsed").innerHTML = 
                                                    `<li><i class="fab fa-html5"></i></li>
                                                    <li><i class="fab fa-css3-alt"></i></li>
                                                    <li><i class="fab fa-js-square"></i></li>
                                                    <li><i class="fab fa-react"></i></li>
                                                    <li><i class="fab fa-sass"></i></li>`;
    document.getElementById("livePreviewLink").href = "https://facebook.com";
    document.getElementById("githubLink").href = "https://github.com";
    openProject();
}

function thirdProject() {
    document.getElementById('panelTitle').innerHTML = "Third project";
    document.getElementById('projectDefinition').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit facilis amet ab quo, possimus nobis quos. Delectus fugit iusto reiciendis repellat praesentium enim quidem sequi unde facilis, voluptatum eveniet aperiam adipisci maxime officia assumenda, temporibus atque, repudiandae perspiciatis. Aspernatur fuga laudantium facere natus, ullam reiciendis quo? Quam, doloribus asperiores.";
    document.getElementById('projectImage').src = "resources/img/pankaj-patel-u2Ru4QBXA5Q-unsplash.png";
    document.getElementById("langUsed").innerHTML = 
                                                    `<li><i class="fab fa-html5"></i></li>
                                                    <li><i class="fab fa-css3-alt"></i></li>
                                                    <li><i class="fab fa-js-square"></i></li>
                                                    <li><i class="fab fa-react"></i></li>`;
    document.getElementById("livePreviewLink").href = "https://google.com";
    document.getElementById("githubLink").href = "https://github.com";
    openProject();
}

function fourthProject() {
    document.getElementById('panelTitle').innerHTML = "Fourth project";
    document.getElementById('projectDefinition').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit facilis amet ab quo, possimus nobis quos. Delectus fugit iusto reiciendis repellat praesentium enim quidem sequi unde facilis, voluptatum eveniet aperiam adipisci maxime officia assumenda, temporibus atque, repudiandae perspiciatis. Aspernatur fuga laudantium facere natus, ullam reiciendis quo? Quam, doloribus asperiores.";
    document.getElementById('projectImage').src = "resources/img/pankaj-patel-u2Ru4QBXA5Q-unsplash.png";
    document.getElementById("langUsed").innerHTML = 
                                                `<li><i class="fab fa-html5"></i></li>
                                                <li><i class="fab fa-css3-alt"></i></li>
                                                <li><i class="fab fa-js-square"></i></li>`;

    document.getElementById("livePreviewLink").href = "https://delfi.lt";  
    document.getElementById("githubLink").href = "https://github.com";
    openProject();    
}

