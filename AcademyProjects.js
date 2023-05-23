let academyProjectPortal =
{
    verticalCells: 45,
    horizontalCells: 90,
    headerText: 1.8,
    labelText: 0.9,
    displayText: 1.4,
    buttonText: 1.7,
    inputText: 1,
    activePage: 'default',
    pages: {
        list: ['default'],
        default: {
            headers: [],
            labels: [
                {
                    text: 'Run Time',
                    left: 1, top: 1,
                    height: 2, width: 6
                },
                {
                    text: 'Level',
                    left: 15, top: 5,
                    height: 2, width: 5
                },
                {
                    text: 'Goal',
                    left: 22, top: 5,
                    height: 2, width: 5
                },
                {
                    text: 'Storage Facility',
                    left: 4, top: 8,
                    height: 2, width: 11
                },
                {
                    text: 'Transfer Wires',
                    left: 5, top: 12,
                    height: 2, width: 10
                },
                {
                    text: 'Bio-Mechanics Lab',
                    left: 3, top: 16,
                    height: 2, width: 12
                },
                {
                    text: 'Exo-Energy',
                    left: 7, top: 20,
                    height: 2, width: 8
                },
                {
                    text: 'Defensive Research',
                    left: 1, top: 24,
                    height: 2, width: 14
                },
                {
                    text: 'Warp-Drive Lab',
                    left: 5, top: 28,
                    height: 2, width: 10
                }
            ],
            inputs: [
                {
                    id: 'storagelevel',
                    type: 'number',
                    left: 16, top: 7.25,
                    width: 5, height: 2
                },
                {
                    id: 'transferlevel',
                    type: 'number',
                    left: 16, top: 11.25,
                    width: 5, height: 2
                },
                {
                    id: 'biomechlevel',
                    type: 'number',
                    left: 16, top: 15.25,
                    width: 5, height: 2
                },
                {
                    id: 'exolevel',
                    type: 'number',
                    left: 16, top: 19.25,
                    width: 5, height: 2
                },
                {
                    id: 'defensivelevel',
                    type: 'number',
                    left: 16, top: 23.25,
                    width: 5, height: 2
                },
                {
                    id: 'warpdrivelevel',
                    type: 'number',
                    left: 16, top: 27.25,
                    width: 5, height: 2
                },
                {
                    id: 'duration',
                    type: 'number',
                    left: 8, top: 0.25,
                    width: 5, height: 2
                }
            ],
            checkboxes: [],
            displays: [
                {
                    id: 'storagegoal',
                    left: 24, top: 7.75,
                    height: 2, width: 6
                },
                {
                    id: 'transfergoal',
                    left: 24, top: 11.75,
                    height: 2, width: 6
                },
                {
                    id: 'biomechgoal',
                    left: 24, top: 15.75,
                    height: 2, width: 6
                },
                {
                    id: 'exogoal',
                    left: 24, top: 19.75,
                    height: 2, width: 6
                },
                {
                    id: 'defensivegoal',
                    left: 24, top: 23.75,
                    height: 2, width: 6
                },
                {
                    id: 'warpdrivegoal',
                    left: 24, top: 27.75,
                    height: 2, width: 6
                },
                {
                    id: 'totalnew',
                    left: 24, top: 31.75,
                    height: 2, width: 6
                }
            ],
            buttons: [],
            toggles: [
                {
                    id: 'runtime',
                    settings: [
                        {
                            text: 'minute',
                            color: '#FF8888'
                        },
                        {
                            text: 'hour',
                            color: '#88FF88'
                        },
                        {
                            text: 'day',
                            color: '#8888FF'
                        }
                    ],
                    left: 14, top: 0.5,
                    width: 9, height: 2
                }
            ],
            setters: []
        }
    }
};

let projects = ['storage', 'transfer', 'biomech', 'exo', 'defensive', 'warpdrive'];
let [initLeft, initTop] = [29, 7.25];
let [stepLeft, stepTop] = [2, 4];

for (let level = 0; level < 30; level++)
{
    let numberObj =
    {
        text: level + 1,
        left: initLeft + (stepLeft * level) - 0.75, top: 5,
        width: 2, height: 2
    };
    academyProjectPortal.pages.default.labels.push(numberObj);
}

for (let project = 0; project < projects.length; project++)
{
    for (let level = 0; level < 30; level++)
    {
        let setterObj =
        {
            id: `setter${projects[project]}${level+1}`,
            settings: [
                {
                    text: '',
                    color: '#444444'
                },
                {
                    text: '',
                    color: '#CCCC44'
                },
                {
                    text: '',
                    color: '#44CC44'
                },
                {
                    text: '',
                    color: '#4444CC'
                }
            ],
            left: initLeft + (stepLeft * level), top: initTop + (stepTop * project),
            width: 2, height: 2
        };
        academyProjectPortal.pages.default.setters.push(setterObj);
    }
}

academyProjectPortal.pages.default.dataLinkage =
{
    set duration(value) { playerData.academy.farmYieldSetting.duration = value; },
    set runtime(value) { playerData.academy.farmYieldSetting.type = value; },
    set storagelevel(value) { playerData.academy.projectLevels[0] = value; },
    set transferlevel(value) { playerData.academy.projectLevels[1] = value; },
    set biomechlevel(value) { playerData.academy.projectLevels[2] = value; },
    set exolevel(value) { playerData.academy.projectLevels[3] = value; },
    set defensivelevel(value) { playerData.academy.projectLevels[4] = value; },
    set warpdrivelevel(value) { playerData.academy.projectLevels[5] = value; },

    get duration() { return playerData.academy.farmYieldSetting.duration; },
    get runtime() { return playerData.academy.farmYieldSetting.type; },
    get storagelevel() { return playerData.academy.projectLevels[0]; },
    get transferlevel() { return playerData.academy.projectLevels[1]; },
    get biomechlevel() { return playerData.academy.projectLevels[2]; },
    get exolevel() { return playerData.academy.projectLevels[3]; },
    get defensivelevel() { return playerData.academy.projectLevels[4]; },
    get warpdrivelevel() { return playerData.academy.projectLevels[5]; }
};

academyProjectPortal.pages.default.initFunction = function()
{
    let cellSize = portalPanel.height / academyProjectPortal.verticalCells;

    academyProjectPortal.pages.default.setters.forEach(setter => {
        let newElem = document.createElement('label');
        portalPanel.elem.appendChild(newElem);
        newElem.classList.add(`setter`);
        newElem.id = setter.id;
        newElem.dataset.setting = 0;
        newElem.dataset.wrap = setter.settings.length;
        newElem.style.left = `${cellSize * setter.left}px`;
        newElem.style.top = `${cellSize * setter.top}px`;
        newElem.style.width = `${cellSize * setter.width}px`;
        newElem.style.height = `${cellSize * setter.height}px`;
        newElem.addEventListener('click', portalPanel.updateFunction);
        portalPanel[setter.id] = newElem;
    });

    let selector = `.setter`;
    let properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(cellSize * academyProjectPortal.displayText)}px;\n`,
        'margin: 0px;\n',
        'text-align: center;\n'
    ].join('');

    portalPanel.panelCSS.sheet.insertRule(`${selector} { ${properties} }`);

    let initSetter = academyProjectPortal.pages.default.setters[0];
    for (let j = 0; j < initSetter.settings.length; j++)
    {
        selector = `.setter[data-setting="${j}"]`;
        properties =
        [
            `text-shadow: 0px 0px ${Math.round(cellSize * academyProjectPortal.labelText / 9)}px ${initSetter.settings[j].color};\n`,
            `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px ${initSetter.settings[j].color}, inset 0px 0px ${Math.round(cellSize)}px ${initSetter.settings[j].color};\n`
        ].join('');

        portalPanel.panelCSS.sheet.insertRule(`${selector} { ${properties} }`);
    }

    let setting = playerData.academy.farmYieldSetting.type;
    portalPanel.runtime.dataset.setting = setting;
    portalPanel.runtime.innerText = academyFarmPortal.pages.default.toggles[0].settings[setting].text + (playerData.academy.farmYieldSetting.duration > 1 ? 's' : '');;

    for (let project = 0; project < projects.length; project++)
    {
        for (let level = 0; level < 30; level++)
        {
            portalPanel[`setter${projects[project]}${level+1}`].dataset.setting = 0;
        }
    }

    generateRunYield();
}

academyProjectPortal.pages.default.updateFunction = function(e)
{
    if (e.target.id.includes('duration'))
    {
        portalPanel.dataLinkage[e.target.id] = parseFloat(e.target.value);
        SavePlayerData();

        let currentSetting = playerData.academy.farmYieldSetting.type;
        portalPanel.runtime.innerText = academyProjectPortal.pages.default.toggles[0].settings[currentSetting].text + (playerData.academy.farmYieldSetting.duration > 1 ? 's' : '');

        generateRunYield();

        return;
    }

    if (e.target.id.includes('runtime'))
    {
        let currentSetting = parseInt(e.target.dataset.setting);
        let wrap = parseInt(e.target.dataset.wrap);
        currentSetting++;
        currentSetting = currentSetting % wrap;
        e.target.dataset.setting = currentSetting;

        portalPanel.dataLinkage[e.target.id] = currentSetting;

        let duration = playerData.academy.farmYieldSetting.duration;
        if (currentSetting === 0)
        {
            duration *= (60 * 24);
        }
        else if (currentSetting === 1)
        {
            duration /= 60;
        }
        else
        {
            duration /= 24;
        }
        duration = Math.round(duration * 1000) / 1000;

        playerData.academy.farmYieldSetting.duration = duration;
        portalPanel.duration.value = duration;
        portalPanel.runtime.innerText = academyFarmPortal.pages.default.toggles[0].settings[currentSetting].text + (playerData.academy.farmYieldSetting.duration > 1 ? 's' : '');

        SavePlayerData();

        generateRunYield();

        return;
    }

    if (e.target.id.includes('setter'))
    {
        let id = e.target.id;
        let setting = e.target.dataset.setting;

        if (setting > 1)
        {
            let level = parseInt(id.substr(-1));
            let project = id.substring(6, id.length - 1);
            if (parseInt(id.substr(-2))) 
            { 
                level = parseInt(id.substr(-2)); 
                project = id.substring(6, id.length - 2);
            }
            switch (project)
            {
                case 'storage': project = 0; break;
                case 'transfer': project = 1; break;
                case 'biomech': project = 2; break;
                case 'exo': project = 3; break;
                case 'defensive': project = 4; break;
                case 'warpdrive': project = 5; break;

            }
            setProjectLevel(project, level, setting);
        }

        return;
    }

    portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value);
    SavePlayerData();

    generateRunYield();
}

function generateRunYield()
{
    portalPanel.storehouse = new StoreHouse(CalculateFarmYields(true).matYield);
    portalPanel.projectConfigs = [];
    portalPanel.theoreticals = [];
    for (let projectID = 0; projectID < 6; projectID++)
    {
        portalPanel.projectConfigs.push(new ProjectConfig(projectID, playerData.academy.projectLevels[projectID]));
        let maxLevel = portalPanel.projectConfigs[projectID].MaxLevel(portalPanel.storehouse).newLevels;
        portalPanel.theoreticals.push(Math.min(maxLevel, 30));
        for (let level = 1; level <= 30; level++)
        {
            portalPanel[`setter${projects[projectID]}${level}`].dataset.setting = (level <= maxLevel ? 2 : 0);
        }
        portalPanel[`${projects[projectID]}goal`].innerText = portalPanel.projectConfigs[projectID].currentLevel;
    }

    portalPanel.totalnew.innerText = '+ 0';

    resumeLevels();
}

function setProjectLevel(project, level, setting)
{
    portalPanel.projectConfigs[project].currentLevel = portalPanel.projectConfigs[project].startLevel + level - (setting === "3");
    playerData.academy.projectGoals[project] = level;
    SavePlayerData();

    let totalNew = 0;

    for (let i = 0; i < portalPanel.storehouse.mats.length; i++)
    {
        portalPanel.storehouse.spent[i] = 0;
    }
    for (let i = 0; i < 6; i++)
    {
        let projectCosts = portalPanel.projectConfigs[i].currentCost;
        console.log(`Project: ${projects[i]}`);
        for (let mat = 0; mat < 8; mat++)
        {
            console.log(portalPanel.storehouse.spent[mat].toExponential(2) + ' + ' + projectCosts[mat].toExponential(2));
            portalPanel.storehouse.spent[mat] += projectCosts[mat];
            console.log('= ' + portalPanel.storehouse.spent[mat].toExponential(2));
        }

        totalNew += (portalPanel.projectConfigs[i].currentLevel - portalPanel.projectConfigs[i].startLevel)
    }

    portalPanel.totalnew.innerText = `+ ${totalNew}`;

    for (let projectID = 0; projectID < 6; projectID++)
    {
        let currentLevel = portalPanel.projectConfigs[projectID].currentLevel - portalPanel.projectConfigs[projectID].startLevel;
        let maxLevel = portalPanel.projectConfigs[projectID].MaxLevel(portalPanel.storehouse).newLevels + currentLevel;
        let theoretical = portalPanel.theoreticals[projectID];
        for (let setLevel = 1; setLevel <= theoretical; setLevel++)
        {
            let setting = 0;
            if (setLevel <= currentLevel) setting = 3;
            else if (setLevel <= maxLevel) setting = 2;
            else if (setLevel <= theoretical) setting = 1;
            
            portalPanel[`setter${projects[projectID]}${setLevel}`].dataset.setting = setting;
        }
        portalPanel[`${projects[projectID]}goal`].innerText = portalPanel.projectConfigs[projectID].currentLevel;
    }
}

function resumeLevels()
{
    let prevLevels = playerData.academy.projectGoals;

    let overspent = false;
    let totalNew = 0;

    for (let i = 0; i < 6; i++)
    {
        portalPanel.projectConfigs[i].currentLevel = prevLevels[i] + portalPanel.projectConfigs[i].startLevel;
        let projectCosts = portalPanel.projectConfigs[i].currentCost;

        for (let mat = 0; mat < 8; mat++)
        {
            portalPanel.storehouse.spent[mat] += projectCosts[mat];
            if (portalPanel.storehouse.spent[mat] > portalPanel.storehouse.mats[mat])
            {
                overspent = true;
                break;
            }
        }

        if (overspent) break;

        totalNew += (portalPanel.projectConfigs[i].currentLevel - portalPanel.projectConfigs[i].startLevel)
    }

    if (overspent)
    {
        for (let i = 0; i < 6; i++)
        {
            portalPanel.projectConfigs[i].currentLevel = portalPanel.projectConfigs[i].startLevel;
            playerData.academy.projectGoals[i] = 0;
        }
        for (let i = 0; i < 8; i++)
        {
            portalPanel.storehouse.spent[i] = 0;
        }
        return;
    }

    for (let projectID = 0; projectID < 6; projectID++)
    {
        let currentLevel = portalPanel.projectConfigs[projectID].currentLevel - portalPanel.projectConfigs[projectID].startLevel;
        let maxLevel = portalPanel.projectConfigs[projectID].MaxLevel(portalPanel.storehouse).newLevels + currentLevel;
        let theoretical = portalPanel.theoreticals[projectID];
        for (let setLevel = 1; setLevel <= theoretical; setLevel++)
        {
            let setting = 0;
            if (setLevel <= currentLevel) setting = 3;
            else if (setLevel <= maxLevel) setting = 2;
            else if (setLevel <= theoretical) setting = 1;
            
            portalPanel[`setter${projects[projectID]}${setLevel}`].dataset.setting = setting;
        }
        portalPanel[`${projects[projectID]}goal`].innerText = portalPanel.projectConfigs[projectID].currentLevel;
    }

    portalPanel.totalnew.innerText = `+ ${totalNew}`;
}
