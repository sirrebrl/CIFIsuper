// General installation of navigation bar

const online = true;

const navHeight = 0.1;

const navBar = document.createElement('div');
document.body.append(navBar);
navBar.classList.add('navBar');

const navHighlight = document.createElement('span');
navHighlight.classList.add('navHighlight');
navBar.addEventListener('mouseleave', deHighlight);
navBar.appendChild(navHighlight);

// Customizing buttons for CIFI Super Assistant

const navButtons = [];

// createNavButton('gens', 'Gens', 'rgba(255, 255, 255, 1)'); // 0
// createNavButton('fleet', 'Fleet', 'rgba(255, 255, 255, 1)'); // 1
// createNavButton('upgrades', 'Upgrades', 'rgba(255, 255, 255, 1)'); // 2
//     createNavButton('upgrades-tech', "Tech", 'rgba(255, 255, 255, 1)', 'upgrades'); // 3
//     createNavButton('upgrades-loop', "Loop", 'rgba(255, 255, 255, 1)', 'upgrades'); // 4
//     createNavButton('upgrades-auto', "Automation", 'rgba(255, 255, 255, 1)', 'upgrades'); // 5
//     createNavButton('upgrades-shards', "Shards", 'rgba(255, 255, 255, 1)', 'upgrades'); // 6
//     createNavButton('upgrades-research', "Research", 'rgba(255, 255, 255, 1)', 'upgrades'); // 7
createNavButton('update', "Up to Date", 'rgba(255, 255, 255, 1)');
createNavButton('academy', "Academy", 'rgba(255, 255, 255, 1)'); // 8
    createNavButton('academy-effectors', "Effectors", 'rgba(255, 255, 255, 1)', 'academy'); // 9
    createNavButton('academy-farms', "Farms", 'rgba(255, 255, 255, 1)', 'academy'); // 9
    createNavButton('academy-projects', "Projects", 'rgba(255, 255, 255, 1)', 'academy'); // 9
//     createNavButton('academy-projects', "Projects", 'rgba(255, 255, 255, 1)', 'academy'); // 10
//     createNavButton('academy-gear', "Gear", 'rgba(255, 255, 255, 1)', 'academy'); // 11
//     createNavButton('academy-badges', "CMs & Badges", 'rgba(255, 255, 255, 1)', 'academy'); // 12
// createNavButton('tokens', 'Tokens', 'rgba(255, 255, 255, 1)'); // 13
//     createNavButton('tokens-tier1', "Tier 1", 'rgba(255, 255, 255, 1)', 'tokens'); // 14
//     createNavButton('tokens-tier2', "Tier 2", 'rgba(255, 255, 255, 1)', 'tokens'); // 15
//     createNavButton('tokens-tier3', "Tier 3", 'rgba(255, 255, 255, 1)', 'tokens'); // 16
// createNavButton('diamonds', 'Diamonds', 'rgba(255, 255, 255, 1)'); // 17
//     createNavButton('diamonds-output', "Generator", 'rgba(255, 255, 255, 1)', 'diamonds'); // 18
//     createNavButton('diamonds-special', "Special", 'rgba(255, 255, 255, 1)', 'diamonds'); // 19
//     createNavButton('diamonds-otu', "One-Timer", 'rgba(255, 255, 255, 1)', 'diamonds'); // 20

// Differentiating nav elements with children as not for navigation, and all childless elements as for navigation
navButtons.forEach(navButton =>
    {
        if (navButton.children.length === 0)
        { 
            navButton.navigable = true;
            navButton.elem.addEventListener('click', navigatePanel);
        }
        else
            { navButton.navigable = false; }
    });

// Preparing region for navigation bar
const navDim =
{
    width: window.innerWidth,
    height: window.innerHeight
};

let portals = {
    academyEffector: academyEffectorPortal,
    academyFarm: academyFarmPortal,
    academyProject: academyProjectPortal
};
playerData.activePortal = playerData.activePortal || 'academyEffector';
let activePortal = portals[playerData.activePortal];

function createNavButton(panel, text, color, parent = null)
{
    const newButtonObj =
    {
        panel,
        text,
        color,
        isChild: (parent !== null),
        children: [],
        active: false,
        highlighted: false
    };

    if (newButtonObj.isChild)
    {
        newButtonObj.parent = parent;

        // Finding the parent nav element and adding this child to it
        for (let i = 0; i < navButtons.length; i++)
        {
            if (navButtons[i].panel === parent)
                {
                    navButtons[i].children.push(newButtonObj);
                }
        }
    }
    else // Non-children nav elements are always visible and so are immediately added in HTML
    { 
        const newButtonElem = document.createElement('label');
        navBar.appendChild(newButtonElem);
        newButtonElem.classList.add('navButton');
        newButtonElem.dataset.panel = panel;
        newButtonElem.innerText = text;
        newButtonElem.addEventListener('mouseenter', highlightNav);
        newButtonObj.elem = newButtonElem;

        // All child nav elements are added in HTML on mouse-over of the parent
        newButtonObj.spawnChildren = function()
        {
            this.children.forEach(childNav =>
                {
                    const newChild = document.createElement('label');
                    navBar.appendChild(newChild);
                    newChild.classList.add('navButton', 'navChild');
                    newChild.dataset.panel = childNav.panel;
                    newChild.innerText = childNav.text;
                    newChild.addEventListener('mouseenter', highlightNav);
                    newChild.addEventListener('click', navigatePanel);
                    childNav.elem = newChild;
                })

            // Evenly spacing the nav children in an allotted range
            const dividingSpace = 20;
            const totalWidth = this.children.reduce((a, b) => { return a + b.elem.offsetWidth; }, 0) + (dividingSpace * (this.children.length - 1));
            const lineCenter = navDim.height * 0.75;
            let runningLeft = this.elem.offsetLeft + (this.elem.offsetWidth / 2) - (totalWidth / 2);
            if (runningLeft < dividingSpace) { runningLeft = dividingSpace; }
            else if ((runningLeft + totalWidth) > (navDim.width - dividingSpace)) { runningLeft = navDim.width - (totalWidth + dividingSpace); }

            for (let i = 0; i < this.children.length; i++)
            {
                const thisTop = Math.round(lineCenter - this.children[i].elem.offsetHeight);
                const thisLeft = runningLeft;
                runningLeft += this.children[i].elem.offsetWidth + dividingSpace;
                this.children[i].elem.style.top = `${thisTop}px`;
                this.children[i].elem.style.left = `${thisLeft}px`;
            }
        };

        navButtons.push(newButtonObj); 
    }
}

let panelResizeFunction = null;
let destroyCurrentPanel = null;

function openDefaultPanel()
{
    ConstructPortal(window.innerHeight - navDim.height, navDim.width, activePortal);
    // console.log(navButtons[3].spawnChildren());
    // console.log(navButtons);
    // debugger;
    // navButtons[3].active = true;
    // navButtons[3].children[0].active = true;
    // navButtons[3].children[1].active = true;
    // navButtons[3].children[2].active = true;
    // navButtons[3].children[3].active = true;
    // activeNavLink = navButtons[3].children[0].elem;

    // Set nav highlight on the link to the default panel
    // const navCoords = activeNavLink.getBoundingClientRect();
    // const newCoords =
    // {
    //     width: Math.round(navCoords.width * 1.2),
    //     height: Math.round(navCoords.height * 1.2),
    //     left: Math.round(navCoords.left - (navCoords.width * 0.1)),
    //     top: Math.round(navCoords.top - (navCoords.height * 0.2))
    // };
    // navHighlight.style.width = `${newCoords.width}px`;
    // navHighlight.style.height = `${newCoords.height}px`;
    // navHighlight.style.transform = `translate(${newCoords.left}px, ${newCoords.top}px)`;
}

// Adjusting all sizes and positions according to window size when window is resizes
function reDim()
{
    navDim.width = window.innerWidth;
    navDim.height = window.innerHeight * navHeight;
    document.documentElement.style.setProperty('--navWidth', `${navDim.width}px`);
    document.documentElement.style.setProperty('--navHeight', `${navDim.height}px`);
    document.documentElement.style.setProperty('--panelHeight', `${window.innerHeight - navDim.height}px`);

    let stdFontSize = Math.round(window.innerHeight / 60);
    let lgFontSize = Math.round(stdFontSize / 0.6);
    document.documentElement.style.setProperty('--stdFontSize', `${stdFontSize}px`);
    document.documentElement.style.setProperty('--lgFontSize', `${lgFontSize}px`);

    const spareRoom = navDim.width - navButtons.reduce((a, b) => { return a + b.elem.offsetWidth; }, 0);
    const dividingSpace = Math.round(spareRoom / (navButtons.length + 1));
    let runningLeft = dividingSpace;
    for (let i = 0; i < navButtons.length; i++)
    {
        const thisTop = Math.round((navDim.height / 4) - (navButtons[i].elem.offsetHeight / 2));
        const thisLeft = runningLeft;
        runningLeft += navButtons[i].elem.offsetWidth + dividingSpace;
        navButtons[i].elem.style.top = `${thisTop}px`;
        navButtons[i].elem.style.left = `${thisLeft}px`;
    }

    // if (panelResizeFunction === null) { openDefaultPanel(); }

    // if (panelResizeFunction) panelResizeFunction(navDim.width, window.innerHeight - navDim.height);

    destroyPortal();
    ConstructPortal(window.innerHeight - navDim.height, navDim.width, activePortal);

    deHighlight();
}

let activeNavLink = null;
let activeNavPanel = '';

function destroyNavChildren(highlighting = false)
{
    let childrenDestroyed = false;
    const currentChildren = document.querySelectorAll('.navChild');
    if (currentChildren.length > 0)
    {
        const childPanel = currentChildren[0].dataset.panel;
        let linkActive = false;
        navButtons.forEach(navButton =>
            {
                if (childPanel.includes(navButton.panel) && navButton.active) { linkActive = true; }
            });
        if (linkActive === false || highlighting)
        {
            for (let i = currentChildren.length - 1; i > -1; i--)
            {
                navBar.removeChild(currentChildren[i]);
            }
            childrenDestroyed = true;
        }
    } else { childrenDestroyed = true; }
    return childrenDestroyed;
}

function highlightNav()
{
    const navCoords = this.getBoundingClientRect();
    const newCoords =
    {
        width: Math.round(navCoords.width * 1.2),
        height: Math.round(navCoords.height * 1.2),
        left: Math.round(navCoords.left - (navCoords.width * 0.1)),
        top: Math.round(navCoords.top - (navCoords.height * 0.2))
    };
    navHighlight.style.width = `${newCoords.width}px`;
    navHighlight.style.height = `${newCoords.height}px`;
    navHighlight.style.transform = `translate(${newCoords.left}px, ${newCoords.top}px)`;

    const targetNav = this.dataset.panel;

    navButtons.forEach(navButton =>
        {
            if (!this.classList.contains('navChild') && targetNav.includes(navButton.panel))
            {
                destroyNavChildren(true);
                if (targetNav === navButton.panel && navButton.children.length > 0) { navButton.spawnChildren(); }
                navButton.highlighted = true;
            }
        });
    navButtons.forEach(navButton =>
        {
            if (!this.dataset.panel.includes(navButton.panel))
            { 
                navButton.highlighted = false;
            }
        });
}

function deHighlight()
{
    if (!activeNavLink) return;

    const childrenDestroyed = destroyNavChildren();

    navButtons.forEach(navButton =>
        {
            if (!navButton.highlighted && navButton.active && navButton.children.length > 0)
            { 
                if (childrenDestroyed) { navButton.spawnChildren(); }
                navButton.children.forEach(navChild =>
                    {
                        if (activeNavPanel === navChild.panel) { activeNavLink = navChild.elem; }
                    })
            }
            navButton.highlighted = false;
        });

    const navCoords = activeNavLink.getBoundingClientRect();
    const newCoords =
    {
        width: Math.round(navCoords.width * 1.2),
        height: Math.round(navCoords.height * 1.2),
        left: Math.round(navCoords.left - (navCoords.width * 0.1)),
        top: Math.round(navCoords.top - (navCoords.height * 0.2))
    };
    navHighlight.style.width = `${newCoords.width}px`;
    navHighlight.style.height = `${newCoords.height}px`;
    navHighlight.style.transform = `translate(${newCoords.left}px, ${newCoords.top}px)`;

}

function navigatePanel(e)
{
    const targetPanel = e.target.dataset.panel;
    navButtons.forEach(navButton =>
        {
            if (navButton.panel === targetPanel)
            {
                navButton.active = true;
                activeNavLink = navButton.elem;
                activeNavPanel = navButton.panel;
            }
            else if (targetPanel.includes(navButton.panel))
            {
                navButton.active = true;
                navButton.children.forEach(navChild =>
                    {
                        if (navChild.panel === targetPanel)
                        {
                            navChild.active = true;
                            activeNavLink = navChild.elem;
                            activeNavPanel = navChild.panel;
                        }
                        else
                        {
                            navChild.active = false;
                        }
                    });
            }
            else
            {
                navButton.active = false;
                if (navButton.children.length > 0)
                {
                    navButton.children.forEach(navChild => { navChild.active = false;});
                }
            }
        });

    if (targetPanel.includes('academy-effectors'))
    { 
        destroyPortal(); 
        activePortal = academyEffectorPortal;
        playerData.activePortal = 'academyEffector';
        savePlayerData();
        ConstructPortal(window.innerHeight - navDim.height, navDim.width, activePortal);
    }
    else if (targetPanel.includes('academy-farms'))
    { 
        destroyPortal(); 
        activePortal = academyFarmPortal;
        playerData.activePortal = 'academyFarm';
        savePlayerData();
        ConstructPortal(window.innerHeight - navDim.height, navDim.width, activePortal);
    }
    else if (targetPanel.includes('academy-projects'))
    { 
        destroyPortal(); 
        activePortal = academyProjectPortal;
        playerData.activePortal = 'academyProject';
        savePlayerData();
        ConstructPortal(window.innerHeight - navDim.height, navDim.width, activePortal);
    }
    else if (targetPanel.includes('update'))
    {
        location.reload();
    }
    
    setTimeout(reDim, 50);
}

function checkUpdate()
{
    let outOfDate = false;

    fetch('version.json')
        .then(response => response.json())
        .then(data => {
            var latestVersion = data.version;
            if (latestVersion > GameDB.version) { outOfDate = true; pushUpdate(); }
        })
        .catch(error => {
            console.error('Error fetching latest version:', error);
            outOfDate = true;
            pushUpdate(false);
        });

    if (!outOfDate) setTimeout(checkUpdate, 600000);
}

function pushUpdate(newVersion = true)
{
    navButtons[0].elem.innerText = (newVersion ? 'Refresh to Update' : 'Update Error');
}

// Ensuring everything is properly sized to the window after allowing everything to load
setTimeout(reDim, 100);
if (online) setTimeout(checkUpdate, 3000);
window.addEventListener('resize', reDim);
