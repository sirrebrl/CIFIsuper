// const academyPanel =
// {
//     width: 10,
//     height: 10,
//     panelCSS: null,
//     active: ''
// };

function constructAcademyPanel(width, height, section)
{
    academyPanel.width = width;
    academyPanel.height = height;

    const panelElem = document.createElement('div');
    document.body.append(panelElem);
    panelElem.classList.add('panel');
    panelElem.style.width = `${academyPanel.width}px`;
    panelElem.style.height = `${academyPanel.height}px`;
    academyPanel.elem = panelElem;

    if (section.includes('farms')) { constructFarmPanel(); }
    else if (section.includes('projects')) { constructProjectPanel(); }
    else if (section.includes('gear')) { constructGearPanel(); }
    else if (section.includes('badges')) { constructBadgePanel(); }
}

function resizeAcademyPanel(width, height)
{
    academyPanel.width = width;
    academyPanel.height = height;
    academyPanel.elem.style.width = `${academyPanel.width}px`;
    academyPanel.elem.style.height = `${academyPanel.height}px`;

    if (academyPanel.active === 'farms') { resizeFarmPanel(); }
    else if (academyPanel.active === 'projects') { resizeProjectPanel(); }
    else if (academyPanel.active === 'gear') { resizeGearPanel(); }
    else if (academyPanel.active === 'badges') { resizeBadgePanel(); }
}

function destroyAcademyPanel()
{
    document.body.removeChild(academyPanel.elem);
    academyPanel.elem = null;
    document.body.removeChild(academyPanel.panelCSS);
    academyPanel.panelCSS = null;
}

function constructFarmPanel()
{
    const lineHeight = academyPanel.height / 24;

    const zeusSection =
    {
        width: academyPanel.width / 2.1,
        height: academyPanel.height / 8
    };

    const modSection =
    {
        width: academyPanel.width / 2.1,
        height: academyPanel.height / 8
    };
    modSection.left = academyPanel.width - modSection.width;

    const researchSection =
    {
        width: academyPanel.width / 2.1,
        height: academyPanel.height / 16
    };

    const academySection =
    {
        width: academyPanel.width / 2.1,
        height: academyPanel.height / 16
    };
    academySection.left = academyPanel.width - academySection.width;

    setFarmCSS(lineHeight);

    const panelElem = document.createElement('div');
    document.body.append(panelElem);
    panelElem.classList.add('panel');
    panelElem.style.width = `${academyPanel.width}px`;
    panelElem.style.height = `${academyPanel.height}px`;
    academyPanel.elem = panelElem;

    academyPanel.zeusElem = [];

    const zeusHeader = document.createElement('label');
    academyPanel.elem.appendChild(zeusHeader);
    zeusHeader.innerText = 'Zeus';
    zeusHeader.classList.add('sectionHeader');
    zeusHeader.style.left = `10px`;
    zeusHeader.style.top = `${Math.round(lineHeight / 2 - (zeusHeader.offsetHeight / 2))}px`;
    academyPanel.zeusElem.push(zeusHeader);

    const rankLabel = document.createElement('label');
    academyPanel.elem.appendChild(rankLabel);
    rankLabel.innerText = 'Rank';
    rankLabel.classList.add('inputLabel');
    rankLabel.style.left = `10px`;
    rankLabel.style.top = `${Math.round(lineHeight * 3 / 2 - (rankLabel.offsetHeight / 2))}px`;
    academyPanel.zeusElem.push(rankLabel);

    const rankInp = document.createElement('input');
    academyPanel.elem.appendChild(rankInp);
    rankInp.type = 'number';
    rankInp.value = playerData.fleet.zeus.rank.current;
    rankInp.classList.add('dataField');
    rankInp.style.left = `${Math.round(10 + rankLabel.offsetWidth + (rankInp.offsetWidth / 2))}px`;
    rankInp.style.top = `${Math.round(lineHeight * 3 / 2 - (rankInp.offsetHeight / 2))}px`;
    rankInp.addEventListener('change', modifyFarmValue);
    academyPanel.zeusElem.push(rankInp);
    
    panelResizeFunction = resizeAcademyPanel;
    destroyCurrentPanel = destroyAcademyPanel;
    academyPanel.active = 'farms';
}

function constructProjectPanel()
{

}

function constructGearPanel()
{

}

function constructBadgePanel()
{

}

function resizeFarmPanel()
{

}

function resizeProjectPanel()
{

}

function resizeGearPanel()
{

}

function resizeBadgePanel()
{

}

function setFarmCSS(lineHeight)
{
    if (academyPanel.panelCSS) document.body.removeChild(academyPanel.panelCSS);

    const newCSS = document.createElement('style');
    document.body.append(newCSS);
    const newStyleSheet = newCSS.sheet;

    let selector = '.sectionHeader';
    let properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(lineHeight * 0.8)}px;\n`,
        `line-height: ${Math.round(lineHeight * 0.8)}px;\n`,
        'color: #FB7CC7;\n',
        `text-shadow: 0px 0px ${Math.round(lineHeight * 0.8 / 9)}px #FB7CC7;\n`,
        'margin: auto;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.inputLabel';
    properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(lineHeight * 0.7)}px;\n`,
        `line-height: ${Math.round(lineHeight * 0.7)}px;\n`,
        'color: #FB7CC7;\n',
        `text-shadow: 0px 0px ${Math.round(lineHeight * 0.8 / 9)}px #FB7CC7;\n`,
        'margin: auto;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.dataField';
    properties =
    [
        'position: absolute;\n',
        `height: ${Math.round(lineHeight * 0.9)}px;\n`,
        `width: ${Math.round(lineHeight * 2.7)}px;\n`,
        `font-size: ${Math.round(lineHeight * 0.8)}px;\n`,
        `text-align: center;\n`,
        'font-family: "Syncopate";\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    academyPanel.panelCSS = newCSS;
}

function modifyFarmValue(e)
{

}