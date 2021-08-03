var gProjects = []
var minesweeper = createProject('mineSweeper', 'MineSweeper is a old game most of us know it\'s rules so iv\'e added some features to it to keep things iteresting .. enjoy :)', 'https://oripilpel.github.io/Sprint1/', 1627307451035, ['javascript', 'css', 'html'], 'game')
var touchnums = createProject('touchnums', 'Touch nums is the game you need to touch all the numbers in acending order as fast as you can.. enjoy :)', 'https://oripilpel.github.io/touch-nums/', 1626702651035, ['javascript', 'css', 'html'], 'game')

addProject(minesweeper)
addProject(touchnums)


function addProject(project) {
    gProjects.push(project)
}

function createProject(name, desc, url, createdAt, labels, category) {
    return {
        imgUrl: getImgUrl(name),
        name,
        desc,
        url,
        createdAt: formatDate(createdAt),
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

function formatDate(timestamp) {
    var date = new Date(timestamp);
    return (date.getMonth() + 1) + '/' + date.getFullYear()
}