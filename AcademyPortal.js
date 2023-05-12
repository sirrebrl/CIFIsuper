function CalculateFarmTimes(getRawTime = false)
{
    let farmData = [];
    for (let planet = 0; planet < GameDB.academy.planets; planet++)
    {
        for (let farm = 0; farm < 3; farm++)
        {
            let power = 0;
            let population = 0;
            power += playerData.academy.farms[planet][farm].pods * playerData.academy.personnel[0].power;
            population += playerData.academy.farms[planet][farm].pods;
            power += playerData.academy.farms[planet][farm].fireteams * playerData.academy.personnel[1].power;
            population += playerData.academy.farms[planet][farm].fireteams;
            power += playerData.academy.farms[planet][farm].titans * playerData.academy.personnel[2].power;
            population += playerData.academy.farms[planet][farm].titans;
            power += playerData.academy.farms[planet][farm].corvettes * playerData.academy.personnel[3].power;
            population += playerData.academy.farms[planet][farm].corvettes;

            power *= (playerData.academy.badges.engineering + 1);
            power *= Math.pow(1.05, Math.floor((playerData.research.missionAnalysis3 + 1) / 2));
            power *= Math.pow(1.03, playerData.loopMods.swarm);
            console.log(power);

            if (power === 0)
            {
                if (getRawTime)
                {
                    farmData.push({time: 1e10, personnel: population}); continue;
                }
                farmData.push({time: '', personnel: 0}); continue;
            }

            let seconds = 60 * GameDB.academy.farms[planet * 3 + farm].baseTime / power;
            seconds = Math.max(seconds, 2);

            console.log(seconds);

            if (getRawTime) { farmData.push({time: seconds, personnel: population}); continue; }

            let hours = Math.floor(seconds / 3600);
            seconds -= hours * 3600;

            let minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60;

            if (hours > 0) { seconds = Math.round(seconds); }

            let time = Math.round(seconds * 100) / 100;
            if (minutes > 0 || hours > 0)
            {
                time = minutes + ':' + (seconds < 10 ? '0' : '') + time;
                if (hours > 0)
                {
                    time = hours + ':' + (minutes < 10 ? '0' : '') + time;
                }
            }

            farmData.push({time, personnel: population});
        }
    }

    return farmData;
}

function GetMaxMissionRate()
{
    let farms = [...GameDB.academy.farms];
    farms.sort((a,b) => {return a.baseTime - b.baseTime;} );

    let speedBoost = (playerData.academy.badges.engineering + 1) * Math.pow(1.05, Math.floor(playerData.research.missionAnalysis3 + 1) / 2) * Math.pow(1.03, playerData.loopMods.swarm);

    let personnel = 
    [
        {
            power: playerData.academy.personnel[3].power,
            totalPop: playerData.academy.personnel[3].population,
            usedPop: 0,
            get availPop() { return this.totalPop - this.usedPop; }
        },
        {
            power: playerData.academy.personnel[2].power,
            totalPop: playerData.academy.personnel[2].population,
            usedPop: 0,
            get availPop() { return this.totalPop - this.usedPop; }
        },
        {
            power: playerData.academy.personnel[1].power,
            totalPop: playerData.academy.personnel[1].population,
            usedPop: 0,
            get availPop() { return this.totalPop - this.usedPop; }
        },
        {
            power: playerData.academy.personnel[0].power,
            totalPop: playerData.academy.personnel[0].population,
            usedPop: 0,
            get availPop() { return this.totalPop - this.usedPop; }
        }
    ];

    farms.forEach(farm =>
        {
            if (farm.id === 32)
            {
                playerData.academy.farms[2][1].pods = 0;
                playerData.academy.farms[2][1].fireteams = 0;
                playerData.academy.farms[2][1].titans = 0;
                playerData.academy.farms[2][1].corvettes = 0;
            }
            else
            {
                let planet = Math.floor(farm.id / 10);
                let farmNum = farm.id - (planet * 10);

                playerData.academy.farms[planet - 1][farmNum - 1].pods = 0;
                playerData.academy.farms[planet - 1][farmNum - 1].fireteams = 0;
                playerData.academy.farms[planet - 1][farmNum - 1].titans = 0;
                playerData.academy.farms[planet - 1][farmNum - 1].corvettes = 0;

                let farmSpecs =
                {
                    maxPop: farm.maxPop,
                    currentPop: 0,
                    popDistro: [0, 0, 0, 0],
                    power: 0,
                    baseTime: farm.baseTime / speedBoost,
                    get availSpace() { return this.maxPop - this.currentPop; },
                    get timeLimitPassed() { return !((this.power === 0) || (this.baseTime * 60 / this.power >= 2)); }
                }

                for (let personnelNum = 0; personnelNum < 4; personnelNum++)
                {
                    let populate = Math.min(farmSpecs.availSpace, personnel[personnelNum].availPop);
                    farmSpecs.currentPop += populate;
                    farmSpecs.power += populate * personnel[personnelNum].power;
                    personnel[personnelNum].usedPop += populate;
                    console.log(GameDB.academy.personnel[3-personnelNum]);
                    console.log(playerData.academy.farms[planet - 1][farmNum - 1]);
                    playerData.academy.farms[planet - 1][farmNum - 1][GameDB.academy.personnel[3-personnelNum]] += populate;

                    while (farmSpecs.timeLimitPassed)
                    {
                        farmSpecs.currentPop--;
                        farmSpecs.power -= personnel[personnelNum].power;
                        personnel[personnelNum].usedPop--;
                        playerData.academy.farms[planet - 1][farmNum - 1][GameDB.academy.personnel[3-personnelNum]]--;
                    }

                    if (farmSpecs.availSpace === 0) break;
                }
            }
        });

    SavePlayerData();
}
