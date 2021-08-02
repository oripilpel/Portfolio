"use strict"; // Start of use strict

$(onInit)
function onInit() {
    renderProjects()
}
function renderProjects() {
    var html = getProjects().map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
            </div>
        </div>
        <img class="img-fluid" src="img/portfolio/04-thumbnail.jpg">
        </a>
        <div class="portfolio-caption">
            <h4>Lines</h4>
            <p class="text-muted">Branding</p>
        </div> 

        `
    }).join('')
    $('projects').html(html)
}
