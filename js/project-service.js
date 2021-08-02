var gId = 1;
var gProjects = []
var minesweeper = createProject('mineSweeper', 'MineSweeper is a old game most of us know it\'s rules so iv\'e added some features to it to keep things iteresting .. enjoy :)', 'https://oripilpel.github.io/Sprint1/', 1627307451035, ['minesweeper', 'game'])
console.log(minesweeper);

function addProject(project) {
    getProjects.push(project)
}

function createProject(name, desc, url, publishedAt, labels) {
    return {
        id=gId++,
        name,
        title=name.toLowerCase(),
        desc,
        url,
        publishedAt,
        labels
    }
}

function getProjects() {
    return gProjects;
}