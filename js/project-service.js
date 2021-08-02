var gProjects = []
var minesweeper = createProject('mineSweeper', 'MineSweeper is a old game most of us know it\'s rules so iv\'e added some features to it to keep things iteresting .. enjoy :)', 'https://oripilpel.github.io/Sprint1/', 1627307451035, ['minesweeper', 'game'], 'game')

addProject(minesweeper)


function addProject(project) {
    gProjects.push(project)
}

function createProject(name, desc, url, publishedAt, labels, category) {
    return {
        imgUrl: getImgUrl(name),
        name,
        desc,
        url,
        publishedAt,
        labels,
        category
    }
}

function getProjects() {
    return gProjects;
}

function getImgUrl(projectName) {
    return `img\\portfolio\\${projectName}`
}