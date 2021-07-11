/* Set the width of the sidebar to 800px (show it) */
function openProject() {
    document.getElementById("mySidepanel").style.width = "800px";
    document.getElementById("mySidepanel").style.opacity = "1";
    overlayOn();
}
  
  /* Set the width of the sidebar to 0 (hide it) */
function closeProject() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.opacity = "0";
    overlayOff();
}

function overlayOn() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.opacity = "0.6";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay").style.opacity = "0";
}

document.getElementById("overlay").addEventListener('click', closeProject);

function firstProject() {
    document.getElementById('projectTitle').innerHTML = "First project";
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
    document.getElementById('projectTitle').innerHTML = "Second project";
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
    document.getElementById('projectTitle').innerHTML = "Third project";
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
    document.getElementById('projectTitle').innerHTML = "Fourth project";
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

