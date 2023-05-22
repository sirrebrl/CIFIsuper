let academyFarmPortal =
{
    verticalCells: 55,
    horizontalCells: 110,
    headerText: 1.8,
    labelText: 0.9,
    displayText: 1.4,
    buttonText: 1.7,
    inputText: 1,
    activePage: 'default',
    pages: {
        list: ['default'],
        default: {
            headers: [
                {
                    text: 'PERSONNEL',
                    top: 1, left: 1,
                    height: 3, width: 12
                },
                {
                    text: 'FARMS',
                    top: 1, left: 27,
                    height: 3, width: 6
                }
            ],
            labels: [
                {
                    text: 'power',
                    left: 12, top: 5,
                    height: 2, width: 5
                },
                {
                    text: 'owned',
                    left: 18, top: 5,
                    height: 2, width: 6
                },
                {
                    text: 'mining pods',
                    left: 2, top: 8,
                    height: 2, width: 8
                },
                {
                    text: 'fireteams',
                    left: 3, top: 11,
                    height: 2, width: 7
                },
                {
                    text: 'titans',
                    left: 5, top: 14,
                    height: 2, width: 5
                },
                {
                    text: 'corvettes',
                    left: 3, top: 17,
                    height: 2, width: 7
                },
                {
                    text: 'farm',
                    left: 28, top: 5,
                    height: 2, width: 4
                },
                {
                    text: 'total',
                    left: 33, top: 5,
                    height: 2, width: 5
                },
                {
                    text: 'pod',
                    left: 39, top: 5,
                    height: 2, width: 4
                },
                {
                    text: 'fire',
                    left: 44, top: 5,
                    height: 2, width: 4
                },
                {
                    text: 'titan',
                    left: 49, top: 5,
                    height: 2, width: 4
                },
                {
                    text: 'corv',
                    left: 54, top: 5,
                    height: 2, width: 4
                },
                {
                    text: 'run time',
                    left: 59, top: 5,
                    height: 2, width: 6
                },
                {
                    text: '1-1',
                    left: 28, top: 8,
                    height: 2, width: 4
                },
                {
                    text: '1-2',
                    left: 28, top: 11,
                    height: 2, width: 4
                },
                {
                    text: '1-3',
                    left: 28, top: 14,
                    height: 2, width: 4
                },
                {
                    text: '2-1',
                    left: 28, top: 17,
                    height: 2, width: 4
                },
                {
                    text: '2-2',
                    left: 28, top: 20,
                    height: 2, width: 4
                },
                {
                    text: '2-3',
                    left: 28, top: 23,
                    height: 2, width: 4
                },
                {
                    text: '3-1',
                    left: 28, top: 26,
                    height: 2, width: 4
                },
                {
                    text: '3-2',
                    left: 28, top: 29,
                    height: 2, width: 4
                },
                {
                    text: '3-3',
                    left: 28, top: 32,
                    height: 2, width: 4
                },
                {
                    text: 'average gains per',
                    left: 70, top: 1,
                    height: 2, width: 12
                },
                {
                    text: 'averaged over',
                    left: 70, top: 4,
                    height: 2, width: 11
                },
                {
                    text: 'stock',
                    left: 80, top: 7,
                    height: 2, width: 7
                },
                {
                    text: 'gain rate',
                    left: 89, top: 7,
                    height: 2, width: 7
                },
                {
                    text: 'yield',
                    left: 96, top: 7,
                    height: 2, width: 7
                },
                {
                    text: 'missions',
                    left: 74, top: 10,
                    height: 2, width: 4
                },
                {
                    text: 'AP',
                    left: 73, top: 13,
                    height: 2, width: 7
                },
                {
                    text: 'difar',
                    left: 76, top: 16,
                    height: 2, width: 4
                },
                {
                    text: 'kento',
                    left: 75, top: 19,
                    height: 2, width: 5
                },
                {
                    text: 'chromium',
                    left: 73, top: 22,
                    height: 2, width: 7
                },
                {
                    text: 'exon',
                    left: 76, top: 25,
                    height: 2, width: 4
                },
                {
                    text: 'organium',
                    left: 73, top: 28,
                    height: 2, width: 7
                },
                {
                    text: 'adamorphium',
                    left: 70, top: 31,
                    height: 2, width: 10
                },
                {
                    text: 'moskom',
                    left: 74, top: 34,
                    height: 2, width: 6
                },
                {
                    text: 'darkseid',
                    left: 74, top: 37,
                    height: 2, width: 6
                }
            ],
            inputs: [
                {
                    id: 'podspower',
                    type: 'number',
                    left: 12, top: 7.25,
                    width: 5, height: 2
                },
                {
                    id: 'podsowned',
                    type: 'number',
                    left: 18, top: 7.25,
                    width: 6, height: 2
                },
                {
                    id: 'fireteamspower',
                    type: 'number',
                    left: 12, top: 10.25,
                    width: 5, height: 2
                },
                {
                    id: 'fireteamsowned',
                    type: 'number',
                    left: 18, top: 10.25,
                    width: 6, height: 2
                },
                {
                    id: 'titanspower',
                    type: 'number',
                    left: 12, top: 13.25,
                    width: 5, height: 2
                },
                {
                    id: 'titansowned',
                    type: 'number',
                    left: 18, top: 13.25,
                    width: 6, height: 2
                },
                {
                    id: 'corvettespower',
                    type: 'number',
                    left: 12, top: 16.25,
                    width: 5, height: 2
                },
                {
                    id: 'corvettesowned',
                    type: 'number',
                    left: 18, top: 16.25,
                    width: 6, height: 2
                },
                {
                    id: 'duration',
                    type: 'number',
                    left: 82, top: 3.25,
                    width: 5, height: 2
                },
                {
                    id: 'ap',
                    type: 'text',
                    left: 81, top: 12.25,
                    width: 7, height: 2
                },
                {
                    id: 'difar',
                    type: 'text',
                    left: 81, top: 15.25,
                    width: 7, height: 2
                },
                {
                    id: 'kento',
                    type: 'text',
                    left: 81, top: 18.25,
                    width: 7, height: 2
                },
                {
                    id: 'chromium',
                    type: 'text',
                    left: 81, top: 21.25,
                    width: 7, height: 2
                },
                {
                    id: 'exon',
                    type: 'text',
                    left: 81, top: 24.25,
                    width: 7, height: 2
                },
                {
                    id: 'organium',
                    type: 'text',
                    left: 81, top: 27.25,
                    width: 7, height: 2
                },
                {
                    id: 'adamorphium',
                    type: 'text',
                    left: 81, top: 30.25,
                    width: 7, height: 2
                },
                {
                    id: 'moskom',
                    type: 'text',
                    left: 81, top: 33.25,
                    width: 7, height: 2
                },
                {
                    id: 'darkseid',
                    type: 'text',
                    left: 81, top: 36.25,
                    width: 7, height: 2
                }
            ],
            checkboxes: [

            ],
            displays: [
                {
                    id: 'rankrequirement',
                    left: 16, top: 6.75,
                    width: 7, height: 2
                },
                {
                    id: 'yieldtimeco',
                    left: 88, top: 3.75,
                    height: 2, width: 7
                },
                {
                    id: 'missionrate',
                    left: 90, top: 9.75,
                    height: 2, width: 7
                },
                {
                    id: 'aprate',
                    left: 90, top: 12.75,
                    height: 2, width: 7
                },
                {
                    id: 'difarrate',
                    left: 90, top: 15.75,
                    height: 2, width: 7
                },
                {
                    id: 'kentorate',
                    left: 90, top: 18.75,
                    height: 2, width: 7
                },
                {
                    id: 'chromiumrate',
                    left: 90, top: 21.75,
                    height: 2, width: 7
                },
                {
                    id: 'exonrate',
                    left: 90, top: 24.75,
                    height: 2, width: 7
                },
                {
                    id: 'organiumrate',
                    left: 90, top: 27.75,
                    height: 2, width: 7
                },
                {
                    id: 'adamorphiumrate',
                    left: 90, top: 30.75,
                    height: 2, width: 7
                },
                {
                    id: 'moskomrate',
                    left: 90, top: 33.75,
                    height: 2, width: 7
                },
                {
                    id: 'darkseidrate',
                    left: 90, top: 36.75,
                    height: 2, width: 7
                },
                {
                    id: 'missionyield',
                    left: 99, top: 9.75,
                    height: 2, width: 7
                },
                {
                    id: 'apyield',
                    left: 99, top: 12.75,
                    height: 2, width: 7
                },
                {
                    id: 'difaryield',
                    left: 99, top: 15.75,
                    height: 2, width: 7
                },
                {
                    id: 'kentoyield',
                    left: 99, top: 18.75,
                    height: 2, width: 7
                },
                {
                    id: 'chromiumyield',
                    left: 99, top: 21.75,
                    height: 2, width: 7
                },
                {
                    id: 'exonyield',
                    left: 99, top: 24.75,
                    height: 2, width: 7
                },
                {
                    id: 'organiumyield',
                    left: 99, top: 27.75,
                    height: 2, width: 7
                },
                {
                    id: 'adamorphiumyield',
                    left: 99, top: 30.75,
                    height: 2, width: 7
                },
                {
                    id: 'moskomyield',
                    left: 99, top: 33.75,
                    height: 2, width: 7
                },
                {
                    id: 'darkseidyield',
                    left: 99, top: 36.75,
                    height: 2, width: 7
                }
            ],
            buttons: [
                {
                    text: 'Maximize Mission Rate',
                    left: 38, top: 35,
                    width: 23, height: 3,
                    function: maximizeMissionRate
                }
            ],
            toggles: [
                {
                    id: 'yieldtime',
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
                    left: 83, top: 0.5,
                    width: 8, height: 2
                }
            ]
        }
    }
};

// Add farm personnel inputs, and total personnel & run time displays
for (let farmNum = 0; farmNum < GameDB.academy.farms.length; farmNum++)
{
    let planet = Math.floor(farmNum / 3);
    let farm = farmNum - (planet * 3);
    let personnel = GameDB.academy.personnel;

    let initLeft = 40;
    let stepLeft = 5;
    let initTop = 7.25;
    let stepTop = 3;

    let farmPopObj =
    {
        id: `farm${planet}${farm}total`,
        left: 35, top: initTop + (farmNum * stepTop) + 0.5,
        width: 5, height: 2
    };
    academyFarmPortal.pages.default.displays.push(farmPopObj);

    let farmTimeObj =
    {
        id: `farm${planet}${farm}time`,
        left: 61, top: initTop + (farmNum * stepTop) + 0.5,
        width: 8, height: 2
    };
    academyFarmPortal.pages.default.displays.push(farmTimeObj);

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
        academyFarmPortal.pages.default.inputs.push(nextObj);
    }
}

academyFarmPortal.pages.default.dataLinkage =
{
    set podspower(value) { playerData.academy.personnel[0].power = value; },
    set podsowned(value) { playerData.academy.personnel[0].population = value; },
    set fireteamspower(value) { playerData.academy.personnel[1].power = value; },
    set fireteamsowned(value) { playerData.academy.personnel[1].population = value; },
    set titanspower(value) { playerData.academy.personnel[2].power = value; },
    set titansowned(value) { playerData.academy.personnel[2].population = value; },
    set corvettespower(value) { playerData.academy.personnel[3].power = value; },
    set corvettesowned(value) { playerData.academy.personnel[3].population = value; },
    set duration(value) { playerData.academy.farmYieldSetting.duration = value; },
    set yieldtime(value) { playerData.academy.farmYieldSetting.type = value; },
    set ap(value) { playerData.academy.ap = value; },
    set difar(value) { playerData.academy.stock[0] = value; },
    set kento(value) { playerData.academy.stock[1] = value; },
    set chromium(value) { playerData.academy.stock[2] = value; },
    set exon(value) { playerData.academy.stock[3] = value; },
    set organium(value) { playerData.academy.stock[4] = value; },
    set adamorphium(value) { playerData.academy.stock[5] = value; },
    set moskom(value) { playerData.academy.stock[6] = value; },
    set darkseid(value) { playerData.academy.stock[7] = value; },

    get podspower() { return playerData.academy.personnel[0].power; },
    get podsowned() { return playerData.academy.personnel[0].population; },
    get fireteamspower() { return playerData.academy.personnel[1].power; },
    get fireteamsowned() { return playerData.academy.personnel[1].population; },
    get titanspower() { return playerData.academy.personnel[2].power; },
    get titansowned() { return playerData.academy.personnel[2].population; },
    get corvettespower() { return playerData.academy.personnel[3].power; },
    get corvettesowned() { return playerData.academy.personnel[3].population; },
    get duration() { return playerData.academy.farmYieldSetting.duration; },
    get yieldtime() { return playerData.academy.farmYieldSetting.type; },
    get ap() { return playerData.academy.ap; },
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
for (let planet = 0; planet < GameDB.academy.planets; planet++)
{
    for (let farm = 0; farm < 3; farm++)
    {
        let propertyName = `farm${planet}${farm}pods`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].pods = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].pods;
            }
        });

        propertyName = `farm${planet}${farm}fireteams`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].fireteams = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].fireteams;
            }
        });

        propertyName = `farm${planet}${farm}titans`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].titans = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].titans;
            }
        });

        propertyName = `farm${planet}${farm}corvettes`;
        Object.defineProperty(academyFarmPortal.pages.default.dataLinkage, propertyName, {
            set : function (value) {
                playerData.academy.farms[planet][farm].corvettes = value;
            },
            get : function () {
                return playerData.academy.farms[planet][farm].corvettes;
            }
        });
    }
}

academyFarmPortal.pages.default.initFunction = function()
{
    let setting = playerData.academy.farmYieldSetting.type;
    portalPanel.yieldtime.dataset.setting = setting;
    portalPanel.yieldtime.innerText = academyFarmPortal.pages.default.toggles[0].settings[setting].text;
    portalPanel.yieldtimeco.innerText = academyFarmPortal.pages.default.toggles[0].settings[setting].text + 's';
    PopulateTiming();
    populateYield();
}

academyFarmPortal.pages.default.updateFunction = function(e)
{
    if (e.target.id.includes('power') || e.target.id.includes('duration'))
    {
        portalPanel.dataLinkage[e.target.id] = parseFloat(e.target.value);
        SavePlayerData();

        PopulateTiming();
        populateYield();

        return;
    }

    if (e.target.classList.contains('toggle'))
    {
        let currentSetting = parseInt(e.target.dataset.setting);
        let wrap = parseInt(e.target.dataset.wrap);
        currentSetting++;
        currentSetting = currentSetting % wrap;
        e.target.dataset.setting = currentSetting;

        portalPanel.dataLinkage[e.target.id] = currentSetting;
        portalPanel.yieldtime.innerText = academyFarmPortal.pages.default.toggles[0].settings[currentSetting].text;
        portalPanel.yieldtimeco.innerText = academyFarmPortal.pages.default.toggles[0].settings[currentSetting].text + 's';

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

        SavePlayerData();

        populateYield();

        return;
    }

    if (e.target.type === 'number')
    {
        portalPanel.dataLinkage[e.target.id] = parseInt(e.target.value);
        SavePlayerData();

        if (e.target.id === 'rankcurrent') { portalPanel['rankrequirement'].innerText = GameDB.fleet.zeus.rankRequirements[portalPanel.dataLinkage[e.target.id]]; }
        
        PopulateTiming();
        populateYield();

        return;
    }

    let value = parseBigNum(e.target.value);
    if (isNaN(value)) {e.target.value = 0}
    else {portalPanel.dataLinkage[e.target.id] = value}
    SavePlayerData();

    populateYield();
}

function PopulateTiming()
{
    let farmData = CalculateFarmTimes();

    for (let planet = 0; planet < GameDB.academy.planets; planet++)
    {
        for (let farm = 0; farm < 3; farm++)
        {
            let datum = farmData[planet * 3 + farm];
            portalPanel[`farm${planet}${farm}total`].innerText = datum.personnel;
            portalPanel[`farm${planet}${farm}time`].innerText = datum.time;
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
                portalPanel[`farm${planet}${farm}${type}`].value = portalPanel.dataLinkage[`farm${planet}${farm}${type}`];
            }
        }
    }

    populateYield();
    PopulateTiming();
}

function populateYield()
{
    let yieldData = CalculateFarmYields();
    let rateData =
    {
        missionRate: yieldData.missionYield / playerData.academy.farmYieldSetting.duration,
        apRate: yieldData.apYield / playerData.academy.farmYieldSetting.duration,
        matRate: yieldData.matYield.map(yieldValue => {
            let rateValue = yieldValue / playerData.academy.farmYieldSetting.duration;
            if (rateValue >= 1000)
            {
                rateValue = rateValue.toExponential(2);
            }
            else
            {
                rateValue = rateValue.toFixed(2);
            }
            return rateValue;
        })
    };
    if (rateData.missionRate >= 1000)
    {
        rateData.missionRate = rateData.missionRate.toExponential(2);
    }
    else
    {
        rateData.missionRate = rateData.missionRate.toFixed(2);
    }
    if (yieldData.missionYield >= 1000)
    {
        yieldData.missionYield = yieldData.missionYield.toExponential(2);
    }
    if (yieldData.apYield >= 1000)
    {
        yieldData.apYield = yieldData.apYield.toExponential(2);
    }
    else
    {
        yieldData.apYield = yieldData.apYield.toFixed(2);
    }
    if (rateData.apRate >= 1000)
    {
        rateData.apRate = rateData.apRate.toExponential(2);
    }
    else
    {
        rateData.apRate = rateData.apRate.toFixed(2);
    }
    yieldData.matYield = yieldData.matYield.map(yieldValue => {
        if (yieldValue > 1000)
        {
            yieldValue = yieldValue.toExponential(2)
        }
        else 
        { 
            yieldValue = yieldValue.toFixed(2);
        }
        return yieldValue;
    });


    portalPanel.missionrate.innerText = rateData.missionRate;
    portalPanel.aprate.innerText = rateData.apRate;
    portalPanel.difarrate.innerText = rateData.matRate[0];
    portalPanel.kentorate.innerText = rateData.matRate[1];
    portalPanel.chromiumrate.innerText = rateData.matRate[2];
    portalPanel.exonrate.innerText = rateData.matRate[3];
    portalPanel.organiumrate.innerText = rateData.matRate[4];
    portalPanel.adamorphiumrate.innerText = rateData.matRate[5];
    portalPanel.moskomrate.innerText = rateData.matRate[6];
    portalPanel.darkseidrate.innerText = rateData.matRate[7];

    portalPanel.missionyield.innerText = yieldData.missionYield;
    portalPanel.apyield.innerText = yieldData.apYield;
    portalPanel.difaryield.innerText = yieldData.matYield[0];
    portalPanel.kentoyield.innerText = yieldData.matYield[1];
    portalPanel.chromiumyield.innerText = yieldData.matYield[2];
    portalPanel.exonyield.innerText = yieldData.matYield[3];
    portalPanel.organiumyield.innerText = yieldData.matYield[4];
    portalPanel.adamorphiumyield.innerText = yieldData.matYield[5];
    portalPanel.moskomyield.innerText = yieldData.matYield[6];
    portalPanel.darkseidyield.innerText = yieldData.matYield[7];
}
