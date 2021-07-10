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
    document.getElementById('projectDefinition').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit facilis amet ab quo, possimus nobis quos. Delectus fugit iusto reiciendis repellat praesentium enim quidem sequi unde facilis, voluptatum eveniet aperiam adipisci maxime officia assumenda, temporibus atque, repudiandae perspiciatis. Aspernatur fuga laudantium facere natus, ullam reiciendis quo? Quam, doloribus asperiores.";
    document.getElementById('projectImage').src = 'resources/img/fernando-hernandez-JdoofvUDUwc-unsplash.png';
    document.getElementById("langUsed").innerHTML = 
                                                    `<li><i class="fab fa-html5"></i></li>
                                                    <li><i class="fab fa-css3-alt"></i></li>
                                                    <li><i class="fab fa-js-square"></i></li>
                                                    <li><i class="fab fa-react"></i></li>
                                                    <li><i class="fab fa-sass"></i></li>`;
    document.getElementById("livePreview").addEventListener('click', function() {
        window.open("https://twitter.com");
    });
}

function secondProject() {
    openProject();
    document.getElementById('projectTitle').innerHTML = "Second project";
    document.getElementById('projectDefinition').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit facilis amet ab quo, possimus nobis quos. Delectus fugit iusto reiciendis repellat praesentium enim quidem sequi unde facilis, voluptatum eveniet aperiam adipisci maxime officia assumenda, temporibus atque, repudiandae perspiciatis. Aspernatur fuga laudantium facere natus, ullam reiciendis quo? Quam, doloribus asperiores.";
    document.getElementById('projectImage').src = "resources/img/maxwell-nelson-taiuG8CPKAQ-unsplash.png";
    document.getElementById("langUsed").innerHTML = 
                                                    `<li><i class="fab fa-html5"></i></li>
                                                    <li><i class="fab fa-css3-alt"></i></li>
                                                    <li><i class="fab fa-js-square"></i></li>
                                                    <li><i class="fab fa-react"></i></li>
                                                    <li><i class="fab fa-sass"></i></li>`;
    document.getElementById("livePreview").addEventListener('click', function() {
        window.open("https://facebook.com");
    });
}

function thirdProject() {
    openProject();
    document.getElementById('projectTitle').innerHTML = "Third project";
    document.getElementById('projectDefinition').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit facilis amet ab quo, possimus nobis quos. Delectus fugit iusto reiciendis repellat praesentium enim quidem sequi unde facilis, voluptatum eveniet aperiam adipisci maxime officia assumenda, temporibus atque, repudiandae perspiciatis. Aspernatur fuga laudantium facere natus, ullam reiciendis quo? Quam, doloribus asperiores.";
    document.getElementById('projectImage').src = "resources/img/pankaj-patel-u2Ru4QBXA5Q-unsplash.png";
    document.getElementById("langUsed").innerHTML = 
                                                    `<li><i class="fab fa-html5"></i></li>
                                                    <li><i class="fab fa-css3-alt"></i></li>
                                                    <li><i class="fab fa-js-square"></i></li>
                                                    <li><i class="fab fa-react"></i></li>`;
    document.getElementById("livePreview").addEventListener('click', function() {
        window.open("https://reddit.com");
    });
}

function fourthProject() {
    openProject();
    document.getElementById('projectTitle').innerHTML = "Fourth project";
    document.getElementById('projectDefinition').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit facilis amet ab quo, possimus nobis quos. Delectus fugit iusto reiciendis repellat praesentium enim quidem sequi unde facilis, voluptatum eveniet aperiam adipisci maxime officia assumenda, temporibus atque, repudiandae perspiciatis. Aspernatur fuga laudantium facere natus, ullam reiciendis quo? Quam, doloribus asperiores.";
    document.getElementById('projectImage').src = "resources/img/pankaj-patel-u2Ru4QBXA5Q-unsplash.png";
    document.getElementById("langUsed").innerHTML = 
                                                `<li><i class="fab fa-html5"></i></li>
                                                <li><i class="fab fa-css3-alt"></i></li>
                                                <li><i class="fab fa-js-square"></i></li>`;
    document.getElementById("livePreview").addEventListener('click', function() {
        window.open("https://delfi.lt");
    });
}