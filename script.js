const themeSwitchButtons = document.getElementsByClassName('theme-switch');
console.log(themeSwitchButtons)

const switchTheme = ev => {
    let currentBackgroundColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--background-default');

    let foregroundColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--foreground-default');
   
    if (currentBackgroundColor == ' rgb(255, 255, 203)') {
        document.documentElement.style
        .setProperty('--background-default', ' rgb(36, 36, 36)');
        
        document.documentElement.style
        .setProperty('--foreground-default', ' rgb(255, 255, 203)');
        
        document.documentElement.style
        .setProperty('--titles-default', 'white');
        ev.target.children[0].classList = `fas fa-sun`

        document.documentElement.style
        .setProperty('--project-background', 'rgb(36, 36, 36)');
        
        document.getElementsByClassName('projects-container')[0].style.backgroundColor = ' rgb(98, 79, 72)';
        document.getElementsByClassName('projects-container')[0].style.borderColor = 'transparent';
    } else {
        document.documentElement.style
        .setProperty('--background-default', ' rgb(255, 255, 203)');
        
        document.documentElement.style
        .setProperty('--foreground-default', ' rgb(36, 36, 36)');
        
        document.documentElement.style
        .setProperty('--titles-default', 'black');
        
        document.documentElement.style
        .setProperty('--project-background', ' rgb(98, 79, 72)');
        ev.target.children[0].classList = `fas fa-moon`;
        document.getElementsByClassName('projects-container')[0].style.backgroundColor = ' rgb(158, 157, 153)';
    }
}

for (let themeSwitchButton of themeSwitchButtons)
    themeSwitchButton.addEventListener('click', switchTheme)


let sideBarButtons = document.getElementsByClassName('sidebar-button');
for (let sideBarButton of sideBarButtons) {
    sideBarButton.addEventListener('click', ev => {
        let sidebar = document.getElementById('sidebar-elements');
        console.log(sidebar);
        sidebar.classList.toggle('inactive')

    })
}