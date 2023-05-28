const portalPanel =
{
    width: 10,
    height: 10,
    panelCSS: null,
    active: ''
};

function ConstructPortal(height, width, portalObj)
{
    portalPanel.portalObj = portalObj;

    let aspectRatio = width / height;
    if (aspectRatio > 2)
    {
        portalPanel.width = width * 2 / aspectRatio;
        portalPanel.height = height;
    }
    else if (aspectRatio < 2)
    {
        portalPanel.height = height * aspectRatio / 2;
        portalPanel.width = width;
    }
    else
    {
        portalPanel.width = width;
        portalPanel.height = height;
    }

    const panelElem = document.createElement('div');
    document.body.append(panelElem);
    panelElem.classList.add('panel');
    panelElem.style.width = `${width}px`;
    panelElem.style.height = `${height}px`;
    portalPanel.elem = panelElem;

    setPanelCSS(portalObj)

    let cellSize = portalPanel.height / portalObj.verticalCells;

    if (portalObj.pages.list.length > 1)
    {
        portalObj.pages.list.forEach(page => {
            let newElem = document.createElement('label');
            portalPanel.elem.appendChild(newElem);
            newElem.innerText = portalObj.pages[page].text;
            newElem.classList.add(`pager${portalObj.pages[page].id}`);

            if (portalObj.activePage === page) 
            { 
                newElem.classList.add('activepage');
                portalPanel.dataLinkage = portalObj.pages[page].dataLinkage;
                portalPanel.updateFunction = portalObj.pages[page].updateFunction;
                if (portalObj.pages[page].initFunction) { portalPanel.initFunction = portalObj.pages[page].initFunction; }
            }

            newElem.id = portalObj.pages[page].id;
            newElem.style.left = `${cellSize * portalObj.pages[page].pagerLeft}px`;
            newElem.style.top = `${cellSize}px`;
            newElem.style.width = `${cellSize * portalObj.pages[page].pagerSize.width}px`;
            newElem.style.height = `${cellSize * portalObj.pages[page].pagerSize.height}px`;
            newElem.addEventListener('click', navigatePage);
        });
    }
    else 
    { 
        portalPanel.dataLinkage = portalObj.pages.default.dataLinkage;
        portalPanel.updateFunction = portalObj.pages.default.updateFunction;
        if (portalObj.pages.default.initFunction) { portalPanel.initFunction = portalObj.pages.default.initFunction; }
    }

    let activePage = portalObj.pages[portalObj.activePage];

    activePage.headers.forEach(header => {
        let newElem = document.createElement('label');
        portalPanel.elem.appendChild(newElem);
        newElem.innerText = header.text;
        newElem.classList.add('header');
        newElem.style.left = `${cellSize * header.left}px`;
        newElem.style.top = `${cellSize * header.top}px`;
        newElem.style.width = `${cellSize * header.width}px`;
        newElem.style.height = `${cellSize * header.height}px`;
    });

    activePage.labels.forEach(label => {
        let newElem = document.createElement('label');
        portalPanel.elem.appendChild(newElem);
        newElem.innerText = label.text;
        newElem.classList.add('label');
        newElem.style.left = `${cellSize * label.left}px`;
        newElem.style.top = `${cellSize * label.top}px`;
        newElem.style.width = `${cellSize * label.width}px`;
        newElem.style.height = `${cellSize * label.height}px`;
    });

    activePage.inputs.forEach(input => {
        let newElem = document.createElement('input');
        portalPanel.elem.appendChild(newElem);
        newElem.type = input.type;
        newElem.id = input.id;
        newElem.classList.add(`input${input.type}`);
        newElem.style.left = `${cellSize * input.left}px`;
        newElem.style.top = `${cellSize * input.top}px`;
        newElem.style.width = `${cellSize * input.width}px`;
        newElem.style.height = `${cellSize * input.height}px`;

        if (input.type === 'text' && portalPanel.dataLinkage[input.id] >= 1000)
        {
            newElem.value = portalPanel.dataLinkage[input.id].toExponential();
        }
        else { newElem.value = portalPanel.dataLinkage[input.id]; }

        if (onMobile)
        {
            newElem.addEventListener('focus', holdResize);
            newElem.addEventListener('focusout', releaseResize);
        }

        newElem.addEventListener('change', portalPanel.updateFunction);

        portalPanel[input.id] = newElem;
    });

    activePage.checkboxes.forEach(checkbox => {
        let newContainer = document.createElement('label');
        portalPanel.elem.appendChild(newContainer);
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

        newCheckbox.checked = portalPanel.dataLinkage[checkbox.id];

        newCheckbox.addEventListener('change', portalPanel.updateFunction);

        let newCheckmark = document.createElement('span');
        newContainer.appendChild(newCheckmark);
        newCheckmark.classList.add('checkmark');
        newCheckmark.style.width = `${cellSize * checkbox.width}px`;
        newCheckmark.style.height = `${cellSize * checkbox.height}px`;
    });

    activePage.displays.forEach(display => {
        let newElem = document.createElement('label');
        portalPanel.elem.appendChild(newElem);
        newElem.id = display.id;
        newElem.classList.add('display');
        newElem.style.left = `${cellSize * display.left}px`;
        newElem.style.top = `${cellSize * display.top}px`;
        newElem.style.width = `${cellSize * display.width}px`;
        newElem.style.height = `${cellSize * display.height}px`;
        portalPanel[display.id] = newElem;
    });

    activePage.buttons.forEach(button => {
        let newElem = document.createElement('label');
        portalPanel.elem.appendChild(newElem);
        newElem.innerText = button.text;
        newElem.classList.add('button');
        newElem.style.left = `${cellSize * button.left}px`;
        newElem.style.top = `${cellSize * button.top}px`;
        newElem.style.width = `${cellSize * button.width}px`;
        newElem.style.height = `${cellSize * button.height}px`;
        newElem.addEventListener('click', button.function);
    });

    activePage.toggles.forEach(toggle => {
        let newElem = document.createElement('label');
        portalPanel.elem.appendChild(newElem);
        newElem.classList.add(`toggle`);
        newElem.id = toggle.id;
        newElem.dataset.setting = 0;
        newElem.dataset.wrap = toggle.settings.length;
        newElem.style.left = `${cellSize * toggle.left}px`;
        newElem.style.top = `${cellSize * toggle.top}px`;
        newElem.style.width = `${cellSize * toggle.width}px`;
        newElem.style.height = `${cellSize * toggle.height}px`;
        newElem.addEventListener('click', portalPanel.updateFunction);
        portalPanel[toggle.id] = newElem;
    });

    if (activePage.lockboxes)
    {
        activePage.lockboxes.forEach(lockbox => {
            let newContainer = document.createElement('label');
            portalPanel.elem.appendChild(newContainer);
            newContainer.classList.add(`lockcontainer`);
            newContainer.style.left = `${cellSize * lockbox.left}px`;
            newContainer.style.top = `${cellSize * lockbox.top}px`;
            newContainer.style.width = `${cellSize * lockbox.width}px`;
            newContainer.style.height = `${cellSize * lockbox.height}px`;
    
            let newLockbox = document.createElement('input');
            newContainer.appendChild(newLockbox);
            newLockbox.type = 'checkbox';
            newLockbox.id = lockbox.id;
            newLockbox.style.width = `0px`;
            newLockbox.style.height = `0px`;
    
            newLockbox.checked = portalPanel.dataLinkage[lockbox.id];
    
            newLockbox.addEventListener('change', portalPanel.updateFunction);
    
            let newLockmark = document.createElement('span');
            newContainer.appendChild(newLockmark);
            newLockmark.classList.add('lockmark');
            newLockmark.style.width = `${cellSize * lockbox.width}px`;
            newLockmark.style.height = `${cellSize * lockbox.height}px`;
        })
    }

    if (portalPanel.initFunction) { portalPanel.initFunction(); }

    // portalPanel['rankrequirement'].innerText = GameDB.fleet.zeus.rankRequirements[academyDataLinkage.rankcurrent];
    // PopulateTiming();
}

function setPanelCSS(portalObj)
{
    if (portalPanel.panelCSS) document.body.removeChild(portalPanel.panelCSS);

    const newCSS = document.createElement('style');
    document.body.append(newCSS);
    const newStyleSheet = newCSS.sheet;

    let cellSize = portalPanel.height / portalObj.verticalCells;

    let [selector, properties] = ['', ''];

    if (portalObj.pages.list.length > 1)
    {
        portalObj.pages.list.forEach(page => {
            let thisPage = portalObj.pages[page];

            selector = `.pager${thisPage.id}`;
            properties =
            [
                'position: absolute;\n',
                `font-size: ${Math.round(cellSize * portalObj.pageText)}px;\n`,
                `line-height: ${Math.round(cellSize * portalObj.pageText * 1.2)}px;\n`,
                `padding: ${cellSize}px 0;\n`,
                'color: #CCCCCC;\n',
                `text-shadow: 0px 0px ${Math.round(cellSize * portalObj.pageText / 9)}px ${thisPage.color};\n`,
                `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px #CCCCCC, inset 0px 0px ${Math.round(cellSize / 10)}px #CCCCCC;\n`,
                'margin: 0px;\n',
                'text-align: center;\n'
            ].join('');
        
            newStyleSheet.insertRule(`${selector} { ${properties} }`);
        
            selector = `.pager${thisPage.id}:hover`;
            properties =
            [
                `box-shadow: 0px 0px ${Math.round(cellSize)}px ${thisPage.color}, inset 0px 0px ${Math.round(cellSize / 2)}px ${thisPage.color};\n`
            ].join('');
        
            newStyleSheet.insertRule(`${selector} { ${properties} }`);
        
            selector = `.pager${thisPage.id}:active`;
            properties =
            [
                `box-shadow: 0px 0px ${Math.round(cellSize)}px #FFFFFF, inset 0px 0px ${Math.round(cellSize / 2)}px #FFFFFF;\n`,
                `text-shadow: 0px 0px ${Math.round(cellSize * portalObj.pageText / 9)}px #000000;\n`,
                `background-color: ${thisPage.color};\n`
            ].join('');
        
            newStyleSheet.insertRule(`${selector} { ${properties} }`);
        
            selector = `.pager${thisPage.id}.activepage`;
            properties =
            [
                `box-shadow: 0px 0px ${Math.round(cellSize)}px ${thisPage.color}, inset 0px 0px ${Math.round(cellSize / 2)}px ${thisPage.color};\n`,
                `text-shadow: 0px 0px ${Math.round(cellSize * portalObj.pageText / 9)}px #000000;\n`,
                `background-color: ${thisPage.color};\n`
            ].join('');
        
            newStyleSheet.insertRule(`${selector} { ${properties} }`);
        });

    }

    selector = '.header';
    properties =
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

    // CHECKBOXES

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
        'text-align: center;\n',
        `line-height: ${Math.round(cellSize * 2)}px;\n`,
        `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px #444444, inset 0px 0px ${Math.round(cellSize / 10)}px #444444;\n`,
        'background-color: #222222;\n'
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
        'background-color: #000000;\n',
        `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px #AA22AA, inset 0px 0px ${Math.round(cellSize)}px #AA22AA;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.checkmark:after';
    properties =
    [
        'content: "";\n',
        'display: none;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.checkcontainer input:checked ~ .checkmark:after';
    properties =
    [
        'content: "✔️";\n',
        'display: block;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    // LOCKBOXES

    selector = '.lockcontainer';
    properties =
    [
        'position: absolute;\n',
        'padding: 0px;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.lockcontainer input';
    properties =
    [
        'position: absolute;\n',
        'padding: 0px;\n',
        'opacity: 0;\n',
        'height: 0px;\n',
        'width: 0px;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.lockmark';
    properties =
    [
        'position: absolute;\n',
        'top: 0px;\n',
        'left: 0px;\n',
        'text-align: center;\n',
        `line-height: ${Math.round(cellSize * 2)}px;\n`,
        `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px #444444, inset 0px 0px ${Math.round(cellSize / 10)}px #444444;\n`,
        'background-color: #222222;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.lockcontainer:hover input ~ .lockmark';
    properties =
    [
        `box-shadow: 0px 0px ${Math.round(cellSize)}px #2222FF, inset 0px 0px ${Math.round(cellSize)}px #2222FF;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.lockcontainer:hover input:checked ~ .lockmark';
    properties =
    [
        `box-shadow: 0px 0px ${Math.round(cellSize)}px #FF2222, inset 0px 0px ${Math.round(cellSize)}px #FF2222;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.lockcontainer input:checked ~ .lockmark';
    properties =
    [
        // 'background-color: #885588;\n',
        'background-color: #000000;\n',
        `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px #AA22AA, inset 0px 0px ${Math.round(cellSize)}px #AA22AA;\n`
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.lockmark:after';
    properties =
    [
        'content: "";\n',
        'display: none;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.lockcontainer input:not(checked) ~ .lockmark:after';
    properties =
    [
        'content: "🔓";\n',
        'display: block;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = '.lockcontainer input:checked ~ .lockmark:after';
    properties =
    [
        'content: "🔒";\n',
        'display: block;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    selector = `.toggle`;
    properties =
    [
        'position: absolute;\n',
        `font-size: ${Math.round(cellSize * portalObj.displayText)}px;\n`,
        `line-height: ${Math.round(cellSize * portalObj.displayText * 1.5)}px;\n`,
        'margin: 0px;\n',
        'text-align: center;\n'
    ].join('');

    newStyleSheet.insertRule(`${selector} { ${properties} }`);

    for (let i = 0; i < portalObj.pages[portalObj.activePage].toggles.length; i++)
    {
        let thisToggle = portalObj.pages[portalObj.activePage].toggles[i];
        for (let j = 0; j < thisToggle.settings.length; j++)
        {
            selector = `.toggle[data-setting="${j}"]`;
            properties =
            [
                `color: ${thisToggle.settings[j].color};\n`,
                `text-shadow: 0px 0px ${Math.round(cellSize * portalObj.labelText / 9)}px ${thisToggle.settings[j].color};\n`,
                `box-shadow: 0px 0px ${Math.round(cellSize / 5)}px ${thisToggle.settings[j].color}, inset 0px 0px ${Math.round(cellSize)}px ${thisToggle.settings[j].color};\n`
            ].join('');
    
            newStyleSheet.insertRule(`${selector} { ${properties} }`);
        }

    }

    portalPanel.panelCSS = newCSS;
}

function navigatePage(e)
{
    let pageID = e.target.id;
    portalPanel.portalObj.activePage = pageID;

    reDim();
}

function destroyPortal()
{
    if (!portalPanel.elem) return;
    document.body.removeChild(portalPanel.elem);
    portalPanel.elem = null;
    document.body.removeChild(portalPanel.panelCSS);
    portalPanel.panelCSS = null;
    portalPanel.initFunction = null;
    portalPanel.updateFunction = null;
}
