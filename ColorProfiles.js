let colorProfilePortal =
{
    verticalCells: 40,
    horizontalCells: 80,
    headerText: 1.8,
    labelText: 0.9,
    displayText: 1.4,
    buttonText: 0.5,
    inputText: 1,
    activePage: 'default',
    pages: {
        list: ['default'],
        default: {
            initFunction: initColorProfile,
            updateFunction: updateColorProfile,
            headers: [
                {
                    text: 'Academy Projects',
                    top: 1, left: 1,
                    height: 3, width: 30
                }
            ],
            labels: [
                {
                    text: 'Unaffordable',
                    left: 2, top: 5,
                    height: 2, width: 10
                },
                {
                    text: 'Theoretical',
                    left: 2, top: 9,
                    height: 2, width: 10
                },
                {
                    text: 'Affordable',
                    left: 2, top: 13,
                    height: 2, width: 10
                },
                {
                    text: 'Selected',
                    left: 2, top: 17,
                    height: 2, width: 10
                }
            ],
            inputs: [
            ],
            checkboxes: [
            ],
            displays: [
            ],
            buttons: [
            ],
            toggles: [],
            lockboxes: [],
            selectors: [
                {
                    id: 'academyproj0',
                    left: 13, top: 4,
                    width: 4, height: 2,
                    function: selectColor
                },
                {
                    id: 'academyproj1',
                    left: 13, top: 8,
                    width: 4, height: 2,
                    function: selectColor
                },
                {
                    id: 'academyproj2',
                    left: 13, top: 12,
                    width: 4, height: 2,
                    function: selectColor
                },
                {
                    id: 'academyproj3',
                    left: 13, top: 16,
                    width: 4, height: 2,
                    function: selectColor
                }
            ]
        }
    }
};

colorProfilePortal.pages.default.dataLinkage =
{
    set academyproj0(value) { playerData.colorProfile.academyProjects[0] = value; },
    set academyproj1(value) { playerData.colorProfile.academyProjects[1] = value; },
    set academyproj2(value) { playerData.colorProfile.academyProjects[2] = value; },
    set academyproj3(value) { playerData.colorProfile.academyProjects[3] = value; },

    get academyproj0() { return playerData.colorProfile.academyProjects[0]; },
    get academyproj1() { return playerData.colorProfile.academyProjects[1]; },
    get academyproj2() { return playerData.colorProfile.academyProjects[2]; },
    get academyproj3() { return playerData.colorProfile.academyProjects[3]; }
}

function initColorProfile()
{
    let cellSize = portalPanel.height / colorProfilePortal.verticalCells;
    let cssSheet = portalPanel.panelCSS.sheet;

    let colorProfile = playerData.colorProfile.academyProjects;

    for (let i = 0; i < 4; i++)
    {
        let selector = colorProfilePortal.pages.default.selectors[i];
        let newElem = document.createElement('input');
        newElem.type = 'color';
        newElem.value = playerData.colorProfile.academyProjects[i];
        portalPanel.elem.appendChild(newElem);
        newElem.classList.add(`selector`);
        newElem.id = selector.id;
        newElem.style.left = `${cellSize * selector.left}px`;
        newElem.style.top = `${cellSize * selector.top}px`;
        newElem.style.width = `${cellSize * selector.width}px`;
        newElem.style.height = `${cellSize * selector.height}px`;
        newElem.addEventListener('change', selector.function);
        portalPanel[selector.id] = newElem;
    }

    colorProfilePortal.pages.default.selectors.forEach(selector => {
    });

    let selector = `.selector`;
    let properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(cellSize * academyProjectPortal.displayText)}px;\n`,
        'margin: 0px;\n',
        'text-align: center;\n'
    ].join('');

    cssSheet.insertRule(`${selector} { ${properties} }`);
}

function updateColorProfile()
{

}

function selectColor(e)
{
    console.log('hi');
    portalPanel.dataLinkage[e.target.id] = e.target.value;
    SavePlayerData();
}