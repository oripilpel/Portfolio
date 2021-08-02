"use strict"; // Start of use strict

$(onInit)
function onInit() {
    renderProjects()
}
function renderProjects() {
    console.log(getProjects());
    var html = getProjects().map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item"> <a class="portfolio-link" data-toggle="modal" href="#${project.name}"> <div class="portfolio-hover"> <div class="portfolio-hover-content"> <i class="fa fa-plus fa-3x"></i> </div> </div> <img class="img-fluid" src="${project.imgUrl}.png" > </a> <div class="portfolio-caption"> <h4>${project.name}</h4> <p class="text-muted">${project.category}</p> </div>
        <div class="portfolio-modal modal fade" id=${project.name} tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl"></div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                            <h2>${project.name}</h2>
                            <p class="item-intro text-muted">${project.name}</p>
                            <img class="img-fluid d-block mx-auto" src="${project.imgUrl}-full.png" alt="">
                                <p>${project.desc}</p>
                                <ul class="list-inline">
                                    <li>Date: ${project.publishedAt}</li>
                                    <li>Category: ${project.category}</li>
                                </ul>
                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                                    <i class="fa fa-times"></i>
                                    Close Project</button>
          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }).join('');
    $('.projects').html(html)
}


