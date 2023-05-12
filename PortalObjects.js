let academyFarmPortal =
{
    verticalCells: 50,
    horizontalCells: 100,
    headerText: 1.8,
    labelText: 0.9,
    displayText: 1.4,
    buttonText: 1.7,
    inputText: 1,
    headers: [
        {
            text: 'ZEUS',
            top: 1, left: 1,
            height: 2, width: 5
        },
        {
            text: 'LOOP MODS',
            top: 1, left: 23,
            height: 2, width: 14
        },
        {
            text: 'FARMS',
            top: 1, left: 56,
            height: 2, width: 6
        },
        {
            text: 'PERSONNEL',
            top: 15, left: 1,
            height: 2, width: 10
        },
        {
            text: 'RESEARCH',
            top: 15, left: 26,
            height: 2, width: 9
        },
        {
            text: 'BADGES',
            top: 28, left: 26,
            height: 2, width: 7
        },
        {
            text: 'STOCK',
            top: 35, left: 1,
            height: 2, width: 6
        }
    ],
    labels: [
        {
            text: 'rank',
            left: 2, top: 4,
            height: 2, width: 4
        },
        {
            text: 'crew',
            left: 12, top: 4,
            height: 2, width: 4
        },
        {
            text: 'next',
            left: 2, top: 7,
            height: 2, width: 4
        },
        {
            text: '/',
            left: 13, top: 7,
            height: 2, width: 2
        },
        {
            text: 'z 3',
            left: 2, top: 10,
            height: 2, width: 3
        },
        {
            text: 'z 6',
            left: 10, top: 10,
            height: 2, width: 3
        },
        {
            text: 'rank benefits',
            left: 24, top: 4,
            height: 2, width: 10
        },
        {
            text: 'beyonders',
            left: 39, top: 4,
            height: 2, width: 8
        },
        {
            text: 'material hauling',
            left: 24, top: 7,
            height: 2, width: 12
        },
        {
            text: 'swarm',
            left: 42, top: 7,
            height: 2, width: 5
        },
        {
            text: 'expansion',
            left: 24, top: 10,
            height: 2, width: 8
        },
        {
            text: 'power',
            left: 11, top: 18,
            height: 2, width: 5
        },
        {
            text: 'owned',
            left: 17, top: 18,
            height: 2, width: 6
        },
        {
            text: 'mining pods',
            left: 2, top: 21,
            height: 2, width: 8
        },
        {
            text: 'fireteams',
            left: 3, top: 24,
            height: 2, width: 7
        },
        {
            text: 'titans',
            left: 5, top: 27,
            height: 2, width: 5
        },
        {
            text: 'corvettes',
            left: 3, top: 30,
            height: 2, width: 7
        },
        {
            text: 'mission analysis 1',
            left: 27, top: 18,
            height: 2, width: 12
        },
        {
            text: 'mission analysis 2',
            left: 27, top: 21,
            height: 2, width: 12
        },
        {
            text: 'mission analysis 3',
            left: 27, top: 24,
            height: 2, width: 12
        },
        {
            text: 'engineering',
            left: 27, top: 31,
            height: 2, width: 9
        },
        {
            text: 'difar',
            left: 5, top: 38,
            height: 2, width: 4
        },
        {
            text: 'kento',
            left: 4, top: 41,
            height: 2, width: 5
        },
        {
            text: 'chromium',
            left: 2, top: 44,
            height: 2, width: 7
        },
        {
            text: 'exon',
            left: 24, top: 38,
            height: 2, width: 4
        },
        {
            text: 'organium',
            left: 21, top: 41,
            height: 2, width: 7
        },
        {
            text: 'adamorphium',
            left: 18, top: 44,
            height: 2, width: 10
        },
        {
            text: 'moskom',
            left: 37, top: 38,
            height: 2, width: 6
        },
        {
            text: 'darkseid',
            left: 37, top: 41,
            height: 2, width: 6
        },
        {
            text: 'farm',
            left: 57, top: 4,
            height: 2, width: 4
        },
        {
            text: 'total',
            left: 62, top: 4,
            height: 2, width: 5
        },
        {
            text: 'pod',
            left: 68, top: 4,
            height: 2, width: 4
        },
        {
            text: 'fire',
            left: 73, top: 4,
            height: 2, width: 4
        },
        {
            text: 'titan',
            left: 78, top: 4,
            height: 2, width: 4
        },
        {
            text: 'corv',
            left: 83, top: 4,
            height: 2, width: 4
        },
        {
            text: 'run time',
            left: 88, top: 4,
            height: 2, width: 6
        },
        {
            text: '1-1',
            left: 57, top: 7,
            height: 2, width: 4
        },
        {
            text: '1-2',
            left: 57, top: 10,
            height: 2, width: 4
        },
        {
            text: '1-3',
            left: 57, top: 13,
            height: 2, width: 4
        },
        {
            text: '2-1',
            left: 57, top: 16,
            height: 2, width: 4
        },
        {
            text: '2-2',
            left: 57, top: 19,
            height: 2, width: 4
        },
        {
            text: '2-3',
            left: 57, top: 22,
            height: 2, width: 4
        },
        {
            text: '3-1',
            left: 57, top: 25,
            height: 2, width: 4
        },
        {
            text: '3-2',
            left: 57, top: 28,
            height: 2, width: 4
        },
        {
            text: '3-3',
            left: 57, top: 31,
            height: 2, width: 4
        }
    ],
    inputs: [
        {
            id: 'rankcurrent',
            type: 'number',
            left: 7, top: 3.25,
            width: 4, height: 2
        },
        {
            id: 'crew',
            type: 'number',
            left: 17, top: 3.25,
            width: 4, height: 2
        },
        {
            id: 'ranknext',
            type: 'number',
            left: 7, top: 6.25,
            width: 6, height: 2
        },
        {
            id: 'install2',
            type: 'number',
            left: 6, top: 9.25,
            width: 3, height: 2
        },
        {
            id: 'install5',
            type: 'number',
            left: 14, top: 9.25,
            width: 3, height: 2
        },
        {
            id: 'rankbenefits',
            type: 'number',
            left: 35, top: 3.25,
            width: 3, height: 2
        },
        {
            id: 'beyonders',
            type: 'number',
            left: 48, top: 3.25,
            width: 5, height: 2
        },
        {
            id: 'mathauling',
            type: 'number',
            left: 37, top: 6.25,
            width: 4, height: 2
        },
        {
            id: 'swarm',
            type: 'number',
            left: 48, top: 6.25,
            width: 3, height: 2
        },
        {
            id: 'expansion',
            type: 'number',
            left: 33, top: 9.25,
            width: 5, height: 2
        },
        {
            id: 'podspower',
            type: 'number',
            left: 12, top: 20.25,
            width: 5, height: 2
        },
        {
            id: 'podsowned',
            type: 'number',
            left: 18, top: 20.25,
            width: 6, height: 2
        },
        {
            id: 'fireteamspower',
            type: 'number',
            left: 12, top: 23.25,
            width: 5, height: 2
        },
        {
            id: 'fireteamsowned',
            type: 'number',
            left: 18, top: 23.25,
            width: 6, height: 2
        },
        {
            id: 'titanspower',
            type: 'number',
            left: 12, top: 26.25,
            width: 5, height: 2
        },
        {
            id: 'titansowned',
            type: 'number',
            left: 18, top: 26.25,
            width: 6, height: 2
        },
        {
            id: 'corvettespower',
            type: 'number',
            left: 12, top: 29.25,
            width: 5, height: 2
        },
        {
            id: 'corvettesowned',
            type: 'number',
            left: 18, top: 29.25,
            width: 6, height: 2
        },
        {
            id: 'missionanalysis1',
            type: 'number',
            left: 40, top: 17.25,
            width: 3, height: 2
        },
        {
            id: 'missionanalysis2',
            type: 'number',
            left: 40, top: 20.25,
            width: 3, height: 2
        },
        {
            id: 'missionanalysis3',
            type: 'number',
            left: 40, top: 23.25,
            width: 3, height: 2
        },
        {
            id: 'difar',
            type: 'text',
            left: 10, top: 37.25,
            width: 7, height: 2
        },
        {
            id: 'kento',
            type: 'text',
            left: 10, top: 40.25,
            width: 7, height: 2
        },
        {
            id: 'chromium',
            type: 'text',
            left: 10, top: 43.25,
            width: 7, height: 2
        },
        {
            id: 'exon',
            type: 'text',
            left: 29, top: 37.25,
            width: 7, height: 2
        },
        {
            id: 'organium',
            type: 'text',
            left: 29, top: 40.25,
            width: 7, height: 2
        },
        {
            id: 'adamorphium',
            type: 'text',
            left: 29, top: 43.25,
            width: 7, height: 2
        },
        {
            id: 'moskom',
            type: 'text',
            left: 44, top: 37.25,
            width: 7, height: 2
        },
        {
            id: 'darkseid',
            type: 'text',
            left: 44, top: 40.25,
            width: 7, height: 2
        }
    ],
    checkboxes: [
        {
            id: 'engineering',
            left: 37, top: 30.25,
            width: 2, height: 2
        }
    ],
    displays: [
        {
            id: 'rankrequirement',
            left: 16, top: 6.75,
            width: 7, height: 2
        }
    ],
    buttons: [
        {
            text: 'Maximize Mission Rate',
            left: 67, top: 35,
            width: 23, height: 3,
            function: maximizeMissionRate
        }
    ]
}

for (let farmNum = 0; farmNum < GameDB.academy.farms.length; farmNum++)
{
    let planet = Math.floor(farmNum / 3);
    let farm = farmNum - (planet * 3);
    let personnel = GameDB.academy.personnel;

    let initLeft = 69;
    let stepLeft = 5;
    let initTop = 6.25;
    let stepTop = 3;

    let farmPopObj =
    {
        id: `farm${planet}${farm}total`,
        left: 64, top: initTop + (farmNum * stepTop) + 0.5,
        width: 5, height: 2
    };
    academyFarmPortal.displays.push(farmPopObj);

    let farmTimeObj =
    {
        id: `farm${planet}${farm}time`,
        left: 90, top: initTop + (farmNum * stepTop) + 0.5,
        width: 8, height: 2
    };
    academyFarmPortal.displays.push(farmTimeObj);

    for (let personnelNum = 0; personnelNum < personnel.length; personnelNum++)
    {
        let nextObj =
        {
            id: `farm${planet}${farm}${personnel[personnelNum]}`,
            type: 'number',
            left: initLeft + (personnelNum * stepLeft),
            top: initTop + (farmNum * stepTop),
            width: 4, height: 2
        };
        academyFarmPortal.inputs.push(nextObj);
    }
}

let academyDataLinkage =
{
    set rankcurrent(value) { playerData.fleet.zeus.rank.current = value; },
    set ranknext(value) { playerData.fleet.zeus.rank.progress = value; },
    set crew(value) { playerData.fleet.zeus.crew = value; },
    set install2(value) { playerData.fleet.zeus.installs[2] = value; },
    set install5(value) { playerData.fleet.zeus.installs[5] = value; },
    set rankbenefits(value) { playerData.loopMods.zeusRankBenefits = value; },
    set beyonders(value) { playerData.loopMods.beyonders = value; },
    set mathauling(value) { playerData.loopMods.materialHauling = value; },
    set swarm(value) { playerData.loopMods.swarm = value; },
    set expansion(value) { playerData.loopMods.expansion = value; },
    set podspower(value) { playerData.academy.personnel[0].power = value; },
    set podsowned(value) { playerData.academy.personnel[0].population = value; },
    set fireteamspower(value) { playerData.academy.personnel[1].power = value; },
    set fireteamsowned(value) { playerData.academy.personnel[1].population = value; },
    set titanspower(value) { playerData.academy.personnel[2].power = value; },
    set titansowned(value) { playerData.academy.personnel[2].population = value; },
    set corvettespower(value) { playerData.academy.personnel[3].power = value; },
    set corvettesowned(value) { playerData.academy.personnel[3].population = value; },
    set missionanalysis1(value) { playerData.research.missionAnalysis1 = value; },
    set missionanalysis2(value) { playerData.research.missionAnalysis2 = value; },
    set missionanalysis3(value) { playerData.research.missionAnalysis3 = value; },
    set engineering(value) { playerData.academy.badges.engineering = value; },
    set difar(value) { playerData.academy.stock[0] = value; },
    set kento(value) { playerData.academy.stock[1] = value; },
    set chromium(value) { playerData.academy.stock[2] = value; },
    set exon(value) { playerData.academy.stock[3] = value; },
    set organium(value) { playerData.academy.stock[4] = value; },
    set adamorphium(value) { playerData.academy.stock[5] = value; },
    set moskom(value) { playerData.academy.stock[6] = value; },
    set darkseid(value) { playerData.academy.stock[7] = value; },

    get rankcurrent() { return playerData.fleet.zeus.rank.current; },
    get ranknext() { return playerData.fleet.zeus.rank.progress; },
    get crew() { return playerData.fleet.zeus.crew; },
    get install2() { return playerData.fleet.zeus.installs[2]; },
    get install5() { return playerData.fleet.zeus.installs[5]; },
    get rankbenefits() { return playerData.loopMods.zeusRankBenefits; },
    get beyonders() { return playerData.loopMods.beyonders; },
    get mathauling() { return playerData.loopMods.materialHauling; },
    get swarm() { return playerData.loopMods.swarm; },
    get expansion() { return playerData.loopMods.expansion; },
    get podspower() { return playerData.academy.personnel[0].power; },
    get podsowned() { return playerData.academy.personnel[0].population; },
    get fireteamspower() { return playerData.academy.personnel[1].power; },
    get fireteamsowned() { return playerData.academy.personnel[1].population; },
    get titanspower() { return playerData.academy.personnel[2].power; },
    get titansowned() { return playerData.academy.personnel[2].population; },
    get corvettespower() { return playerData.academy.personnel[3].power; },
    get corvettesowned() { return playerData.academy.personnel[3].population; },
    get missionanalysis1() { return playerData.research.missionAnalysis1; },
    get missionanalysis2() { return playerData.research.missionAnalysis2; },
    get missionanalysis3() { return playerData.research.missionAnalysis3; },
    get engineering() { return playerData.academy.badges.engineering; },
    get difar() { return playerData.academy.stock[0]; },
    get kento() { return playerData.academy.stock[1]; },
    get chromium() { return playerData.academy.stock[2]; },
    get exon() { return playerData.academy.stock[3]; },
    get organium() { return playerData.academy.stock[4]; },
    get adamorphium() { return playerData.academy.stock[5]; },
    get moskom() { return playerData.academy.stock[6]; },
    get darkseid() { return playerData.academy.stock[7]; }
};

// Adding farm personnel linkages
    console.log('Adding linkages');
for (let planet = 0; planet < GameDB.academy.planets; planet++)
{
    for (let farm = 0; farm < 3; farm++)
    {
        let propertyName = `farm${planet}${farm}pods`;
        Object.defineProperty(academyDataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].pods = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].pods;
            }
        });

        propertyName = `farm${planet}${farm}fireteams`;
        Object.defineProperty(academyDataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].fireteams = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].fireteams;
            }
        });

        propertyName = `farm${planet}${farm}titans`;
        Object.defineProperty(academyDataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].titans = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].titans;
            }
        });

        propertyName = `farm${planet}${farm}corvettes`;
        Object.defineProperty(academyDataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].corvettes = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].corvettes;
            }
        });
    }
}

const academyPanel =
{
    width: 10,
    height: 10,
    panelCSS: null,
    active: ''
};

function ConstructPortal(height, width, portalObj)
{
    let aspectRatio = width / height;
    if (aspectRatio > 2)
    {
        academyPanel.width = width * 2 / aspectRatio;
        academyPanel.height = height;
    }
    else if (aspectRatio < 2)
    {
        academyPanel.height = height * aspectRatio / 2;
        academyPanel.width = width;
    }
    else
    {
        academyPanel.width = width;
        academyPanel.height = height;
    }

    const panelElem = document.createElement('div');
    document.body.append(panelElem);
    panelElem.classList.add('panel');
    panelElem.style.width = `${width}px`;
    panelElem.style.height = `${height}px`;
    academyPanel.elem = panelElem;

    setPanelCSS(portalObj)

    let cellSize = academyPanel.height / portalObj.verticalCells;

    portalObj.headers.forEach(header => {
        let newElem = document.createElement('label');
        academyPanel.elem.appendChild(newElem);
        newElem.innerText = header.text;
        newElem.classList.add('header');
        newElem.style.left = `${cellSize * header.left}px`;
        newElem.style.top = `${cellSize * header.top}px`;
        newElem.style.width = `${cellSize * header.width}px`;
        newElem.style.height = `${cellSize * header.height}px`;
    });

    portalObj.labels.forEach(label => {
        let newElem = document.createElement('label');
        academyPanel.elem.appendChild(newElem);
        newElem.innerText = label.text;
        newElem.classList.add('label');
        newElem.style.left = `${cellSize * label.left}px`;
        newElem.style.top = `${cellSize * label.top}px`;
        newElem.style.width = `${cellSize * label.width}px`;
        newElem.style.height = `${cellSize * label.height}px`;
    });

    portalObj.inputs.forEach(input => {
        let newElem = document.createElement('input');
        academyPanel.elem.appendChild(newElem);
        newElem.type = input.type;
        newElem.id = input.id;
        newElem.classList.add(`input${input.type}`);
        newElem.style.left = `${cellSize * input.left}px`;
        newElem.style.top = `${cellSize * input.top}px`;
        newElem.style.width = `${cellSize * input.width}px`;
        newElem.style.height = `${cellSize * input.height}px`;

        if (input.type === 'text' && academyDataLinkage[input.id] >= 1000)
        {
            newElem.value = academyDataLinkage[input.id].toExponential();
        }
        else { newElem.value = academyDataLinkage[input.id]; }

        newElem.addEventListener('change', recalculate);

        academyPanel[input.id] = newElem;
    });

    portalObj.checkboxes.forEach(checkbox => {
        let newContainer = document.createElement('label');
        academyPanel.elem.appendChild(newContainer);
        newContainer.classList.add(`checkcontainer`);
        newContainer.style.left = `${cellSize * checkbox.left}px`;
        newContainer.style.top = `${cellSize * checkbox.top}px`;
        newContainer.style.width = `${cellSize * checkbox.width}px`;
        newContainer.style.height = `${cellSize * checkbox.height}px`;

        let newCheckbox = document.createElement('input');
        newContainer.appendChild(newCheckbox);
        newCheckbox.type = 'checkbox';
        newCheckbox.id = checkbox.id;
        newCheckbox.style.width = `0px`;
        newCheckbox.style.height = `0px`;

        newCheckbox.checked = academyDataLinkage[checkbox.id];

        newCheckbox.addEventListener('change', recalculate);

        let newCheckmark = document.createElement('span');
        newContainer.appendChild(newCheckmark);
        newCheckmark.classList.add('checkmark');
        newCheckmark.style.width = `${cellSize * checkbox.width}px`;
        newCheckmark.style.height = `${cellSize * checkbox.height}px`;
    });

    // academyPanel.displayElems = [];

    portalObj.displays.forEach(display => {
        let newElem = document.createElement('label');
        academyPanel.elem.appendChild(newElem);
        newElem.id = display.id;
        newElem.classList.add('display');
        newElem.style.left = `${cellSize * display.left}px`;
        newElem.style.top = `${cellSize * display.top}px`;
        newElem.style.width = `${cellSize * display.width}px`;
        newElem.style.height = `${cellSize * display.height}px`;
        academyPanel[display.id] = newElem;
    });

    portalObj.buttons.forEach(button => {
        let newElem = document.createElement('label');
        academyPanel.elem.appendChild(newElem);
        newElem.innerText = button.text;
        newElem.classList.add('button');
        newElem.style.left = `${cellSize * button.left}px`;
        newElem.style.top = `${cellSize * button.top}px`;
        newElem.style.width = `${cellSize * button.width}px`;
        newElem.style.height = `${cellSize * button.height}px`;
        newElem.addEventListener('click', button.function);
    });

    academyPanel['rankrequirement'].innerText = GameDB.fleet.zeus.rankRequirements[academyDataLinkage.rankcurrent];
    PopulateTiming();
}

function setPanelCSS(portalObj)
{
    if (academyPanel.panelCSS) document.body.removeChild(academyPanel.panelCSS);

    const newCSS = document.createElement('style');
    document.body.append(newCSS);
    const newStyleSheet = newCSS.sheet;

    let cellSize = academyPanel.height / portalObj.verticalCells;

    let selector = '.header';
    let properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(cellSize * portalObj.headerText)}px;\n`,
        `line-height: ${Math.round(cellSize * portalObj.headerText)}px;\n`,
        'color: #CCCCCC;\n',
        `text-shadow: 0px 0px ${Math.round(cellSize * portalObj.headerText / 9)}px #FB7CC7;\n`,
        'margin: auto;\n',
        'text-align: start;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.label';
    properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(cellSize * portalObj.labelText)}px;\n`,
        `line-height: ${Math.round(cellSize * portalObj.labelText)}px;\n`,
        'color: #CCCCCC;\n',
        `text-shadow: 0px 0px ${Math.round(cellSize * portalObj.labelText / 9)}px #FB7CC7;\n`,
        'margin: 0px;\n',
        'text-align: end;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.display';
    properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(cellSize * portalObj.displayText)}px;\n`,
        `line-height: ${Math.round(cellSize * portalObj.displayText)}px;\n`,
        'color: #CCCCCC;\n',
        `text-shadow: 0px 0px ${Math.round(cellSize * portalObj.displayText / 9)}px #FB7CC7;\n`,
        'margin: 0px;\n',
        'text-align: start;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.button';
    properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(cellSize * portalObj.buttonText)}px;\n`,
        `line-height: ${Math.round(cellSize * portalObj.buttonText)}px;\n`,
        `padding: ${cellSize}px 0;\n`,
        'color: #CCCCCC;\n',
        `text-shadow: 0px 0px ${Math.round(cellSize * portalObj.buttonText / 9)}px #FB7CC7;\n`,
        `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px #CCCCCC, inset 0px 0px ${Math.round(cellSize / 10)}px #CCCCCC;\n`,
        'margin: 0px;\n',
        'text-align: center;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.button:hover';
    properties =
    [
        `box-shadow: 0px 0px ${Math.round(cellSize)}px #FFFFFF, inset 0px 0px ${Math.round(cellSize / 2)}px #FFFFFF;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.button:active';
    properties =
    [
        `box-shadow: 0px 0px ${Math.round(cellSize)}px #FFFFFF, inset 0px 0px ${Math.round(cellSize / 2)}px #FFFFFF;\n`,
        `background-color: #882288;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.inputnumber';
    properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(cellSize * portalObj.inputText)}px;\n`,
        'text-align: center;\n',
        'font-family: "Syncopate";\n',
        `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px #CCCCCC, inset 0px 0px ${Math.round(cellSize / 10)}px #CCCCCC;\n`,
        'background-color: black;\n',
        `color: #CCCCCC;\n`,
        'padding: 0px\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.inputtext';
    properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(cellSize * portalObj.inputText)}px;\n`,
        'text-align: center;\n',
        'font-family: "Syncopate";\n',
        `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px #CCCCCC, inset 0px 0px ${Math.round(cellSize / 10)}px #CCCCCC;\n`,
        'background-color: black;\n',
        `color: #CCCCCC;\n`,
        'padding: 0px\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.checkcontainer';
    properties =
    [
        'position: absolute;\n',
        'padding: 0px;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.checkcontainer input';
    properties =
    [
        'position: absolute;\n',
        'padding: 0px;\n',
        'opacity: 0;\n',
        'height: 0px;\n',
        'width: 0px;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.checkmark';
    properties =
    [
        'position: absolute;\n',
        'top: 0px;\n',
        'left: 0px;\n',
        `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px #444444, inset 0px 0px ${Math.round(cellSize / 10)}px #444444;\n`,
        'background-color: #222222;\n',
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.checkcontainer:hover input ~ .checkmark';
    properties =
    [
        `box-shadow: 0px 0px ${Math.round(cellSize)}px #2222FF, inset 0px 0px ${Math.round(cellSize)}px #2222FF;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.checkcontainer:hover input:checked ~ .checkmark';
    properties =
    [
        `box-shadow: 0px 0px ${Math.round(cellSize)}px #FF2222, inset 0px 0px ${Math.round(cellSize)}px #FF2222;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.checkcontainer input:checked ~ .checkmark';
    properties =
    [
        // 'background-color: #885588;\n',
        `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px #AA22AA, inset 0px 0px ${Math.round(cellSize)}px #AA22AA;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.checkmark:after';
    properties =
    [
        'content: "";\n',
        'display: none;\n',
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.checkcontainer input:checked ~ .checkmark:after';
    properties =
    [
        'display: block;\n',
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    academyPanel.panelCSS = newCSS;
}

function recalculate(e)
{
    if (e.target.type === 'checkbox')
    {
        academyDataLinkage[e.target.id] = e.target.checked;
        SavePlayerData();
        return;
    }

    if (e.target.id.includes('power'))
    {
        academyDataLinkage[e.target.id] = parseFloat(e.target.value);
        SavePlayerData();

        PopulateTiming();

        return;
    }

    if (e.target.type === 'number')
    {
        academyDataLinkage[e.target.id] = parseInt(e.target.value);
        SavePlayerData();

        if (e.target.id === 'rankcurrent') { academyPanel['rankrequirement'].innerText = GameDB.fleet.zeus.rankRequirements[academyDataLinkage[e.target.id]]; }
        
        PopulateTiming();

        return;
    }

    let value = parseBigNum(e.target.value);
    if (isNaN(value)) {e.target.value = 0}
    else {academyDataLinkage[e.target.id] = value}
    SavePlayerData();
}

function parseBigNum(value)
{
    // k, m, b, t, qa, qu, sx, sp, o, n, d
    value = value.toLowerCase();
    if (value.includes('k'))
    {
        value = parseFloat(value.slice(0, -1));
        if (isNaN(value)) return value;
        value *= 1e3;
    }
    else if (value.includes('m'))
    {
        value = parseFloat(value.slice(0, -1));
        if (isNaN(value)) return value;
        value *= 1e6;
    }
    else if (value.includes('b'))
    {
        value = parseFloat(value.slice(0, -1));
        if (isNaN(value)) return value;
        value *= 1e9;
    }
    else if (value.includes('t'))
    {
        value = parseFloat(value.slice(0, -1));
        if (isNaN(value)) return value;
        value *= 1e12;
    }
    else if (value.includes('qa'))
    {
        value = parseFloat(value.slice(0, -2));
        if (isNaN(value)) return value;
        value *= 1e15;
    }
    else if (value.includes('qu'))
    {
        value = parseFloat(value.slice(0, -2));
        if (isNaN(value)) return value;
        value *= 1e18;
    }
    else if (value.includes('sx'))
    {
        value = parseFloat(value.slice(0, -2));
        if (isNaN(value)) return value;
        value *= 1e21;
    }
    else if (value.includes('sp'))
    {
        value = parseFloat(value.slice(0, -2));
        if (isNaN(value)) return value;
        value *= 1e24;
    }
    else if (value.includes('o'))
    {
        value = parseFloat(value.slice(0, -1));
        if (isNaN(value)) return value;
        value *= 1e27;
    }
    else if (value.includes('n'))
    {
        value = parseFloat(value.slice(0, -1));
        if (isNaN(value)) return value;
        value *= 1e30;
    }
    else if (value.includes('d'))
    {
        value = parseFloat(value.slice(0, -1));
        if (isNaN(value)) return value;
        value *= 1e33;
    }
    else
    {
        value = parseFloat(value);
        if (isNaN(value)) return value;
    }
    
    return value;
}

function PopulateTiming()
{
    let farmData = CalculateFarmTimes();

    for (let planet = 0; planet < GameDB.academy.planets; planet++)
    {
        for (let farm = 0; farm < 3; farm++)
        {
            let datum = farmData[planet * 3 + farm];
            academyPanel[`farm${planet}${farm}total`].innerText = datum.personnel;
            academyPanel[`farm${planet}${farm}time`].innerText = datum.time;
        }
    }
}

function maximizeMissionRate()
{
    GetMaxMissionRate();

    for (let planet = 0; planet < GameDB.academy.planets; planet++)
    {
        for (let farm = 0; farm < 3; farm++)
        {
            for (let personnel = 0; personnel < 4; personnel++)
            {
                let type = GameDB.academy.personnel[personnel];
                academyPanel[`farm${planet}${farm}${type}`].value = academyDataLinkage[`farm${planet}${farm}${type}`];
            }
        }
    }

    PopulateTiming();
}

function destroyPortal()
{
    if (!academyPanel.elem) return;
    document.body.removeChild(academyPanel.elem);
    academyPanel.elem = null;
    document.body.removeChild(academyPanel.panelCSS);
    academyPanel.panelCSS = null;
}
