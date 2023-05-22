function CalculateFarmTimes(getRawTime = false)
{
    let farmData = [];
    for (let planet = 0; planet < GameDB.academy.planets; planet++)
    {
        for (let farm = 0; farm < 3; farm++)
        {
            console.log(`F${planet}-${farm}`);
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

            let missionSpeedBonus = (GameDB.bugs.swarm ? (0.03 * playerData.loopMods.swarm + 1) : Math.pow(1.03, playerData.loopMods.swarm));
            missionSpeedBonus *= (
                GameDB.bugs.mission3 ?
                Math.pow(1.05, Math.floor((playerData.research.mission[2] + 1) / 2)) / (0.05 * (playerData.research.mission[2] === 6) + 1) :
                Math.pow(1.05, Math.floor((playerData.research.mission[2] + 1) / 2))
            );
            missionSpeedBonus *= (playerData.research.perfection[2] > 4) + 1;
            missionSpeedBonus *= (playerData.research.perfection[3] > 4) + 1;
            missionSpeedBonus *= playerData.academy.badges.engineering + 1;

            if (power === 0)
            {
                if (getRawTime)
                {
                    farmData.push({time: 1e10, personnel: population}); continue;
                }
                farmData.push({time: '', personnel: 0}); continue;
            }

            let seconds = 60 * GameDB.academy.farms[planet * 3 + farm].baseTime / (power * missionSpeedBonus);
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

    let speedBoost = (playerData.academy.badges.engineering + 1) * Math.pow(1.05, Math.floor(playerData.research.mission[2] + 1) / 2) * Math.pow(1.03, playerData.loopMods.swarm);

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

function CalculateFarmYields()
{
    let durationSetting = playerData.academy.farmYieldSetting;
    let duration = durationSetting.duration * 60;
    if (durationSetting.type > 0)
    {
        duration *= 60;
    }
    if (durationSetting.type > 1)
    {
        duration *= 24
    }

    let staticAPbonus = Math.pow(1.01, playerData.loopMods.beyonders);
    staticAPbonus *= (GameDB.bugs.destruction ? (3 * playerData.loopMods.destruction) : Math.pow(3, playerData.loopMods.destruction));
    staticAPbonus *= Math.pow(1.1, playerData.loopMods.combatMod);
    staticAPbonus *= Math.pow(0.005 * playerData.loopMods.zeusCrewMotivation + 1, playerData.fleet.zeus.crew);
    staticAPbonus *= (0.1 * playerData.fleet.zeus.installs[1] * playerData.fleet.zeus.crew + 1);
    staticAPbonus *= (0.01 * playerData.fleet.zeus.installs[6] * playerData.fleet.zeus.crew + 1);
    staticAPbonus *= Math.pow(1.35, Math.max(0, playerData.shardMilestones[17] - 70) * (playerData.shardMilestones[17] > 74));
    staticAPbonus *= Math.pow(1.02, playerData.shardMilestones[20]);
    staticAPbonus *= Math.pow(1.07, Math.max(0, playerData.shardMilestones[22] - 45) * (playerData.shardMilestones[22] > 49));
    staticAPbonus *= (
        GameDB.bugs.wonderous ?
        Math.pow(1.063, Math.max(0, playerData.shardMilestones[25] - 8) * (playerData.shardMilestones[25] > 9)) :
        Math.pow(1.063, Math.max(0, playerData.shardMilestones[25] - 25) * (playerData.shardMilestones[25] > 29))
    );
    staticAPbonus *= (
        GameDB.bugs.wonderous ?
        Math.pow(1.15, Math.max(0, playerData.shardMilestones[25] - 70) * (playerData.shardMilestones[25] > 74)) :
        Math.pow(1.063, Math.max(0, playerData.shardMilestones[25] - 115) * (playerData.shardMilestones[25] > 119))
    );
    staticAPbonus *= ((playerData.research.mission[0] > 2 ? 1.3 : 1) * (playerData.research.mission[0] > 4 ? 1.3 : 1));
    staticAPbonus *= (playerData.research.perfection[0] > 3 ? 10 : 1);
    staticAPbonus *= ((playerData.research.mission[1] > 2 ? 1.5 : 1) * (playerData.research.mission[1] > 4 ? 1.5 : 1));
    staticAPbonus *= (playerData.research.perfection[1] > 3 ? 10 : 1);
    staticAPbonus *= ((playerData.research.mission[2] > 2 ? 2 : 1) * (playerData.research.mission[2] > 4 ? 3 : 1));
    staticAPbonus *= (playerData.research.perfection[2] > 3 ? 50 : 1);
    staticAPbonus *= ((playerData.research.mission[4] > 2 ? 3 : 1) * (playerData.research.mission[4] > 4 ? 4 : 1));
    staticAPbonus *= (playerData.research.perfection[3] > 3 ? 99 : 1);
    staticAPbonus *= playerData.academy.cmAP;
    staticAPbonus *= (0.5 * (playerData.academy.gearSets[1] === 4) + 1);
    staticAPbonus *= (0.5 * (playerData.academy.gearSets[2] === 5) + 1);
    staticAPbonus *= (0.5 * (playerData.academy.gearSets[3] === 5) + 1);
    staticAPbonus *= (0.5 * (playerData.academy.gearSets[4] === 5) + 1);
    staticAPbonus *= Math.pow(1.25, playerData.academy.projectLevels[5]);
    staticAPbonus *= playerData.academy.exchanges.dataCubes * 0.005 * Math.pow(1.25, playerData.loopMods.exodus) * Math.pow(1.5, playerData.loopMods.allExchange) * Math.pow(1.1, Math.floor(playerData.academy.exchanges.dataCubes / 100));

    let staticMatBonus = Math.pow(1.01, playerData.loopMods.beyonders);
    staticMatBonus *= (GameDB.bugs.swarm ? (1.25 * playerData.loopMods.swarm) + (playerData.loopMods.swarm === 0) : Math.pow(1.25, playerData.loopMods.swarm));
    staticMatBonus *= Math.pow(1.01, playerData.loopMods.expansion);
    staticMatBonus *= Math.pow(1.05, playerData.loopMods.materialHauling);
    staticMatBonus *= (0.25 * playerData.fleet.zeus.installs[2] * playerData.fleet.zeus.crew + 1);
    staticMatBonus *= (0.1 * playerData.fleet.zeus.installs[5] * playerData.fleet.zeus.crew + 1);
    staticMatBonus *= (
        GameDB.bugs.wonderous ?
        Math.pow(1.043, Math.max(0, playerData.shardMilestones[25] - 20) * (playerData.shardMilestones[25] > 24)) :
        Math.pow(1.043, Math.max(0, playerData.shardMilestones[25] - 55) * (playerData.shardMilestones[25] > 59))
    );
    staticMatBonus *= Math.pow(1.5, Math.floor(playerData.research.mission[0] / 2));
    staticMatBonus *= Math.pow(1.75, Math.floor(playerData.research.mission[1] / 2));
    staticMatBonus *= 4 * (playerData.research.perfection[1] > 1) + 1;
    staticMatBonus *= ((playerData.research.mission[3] > 1 ? 2 : 1) * (playerData.research.mission[3] > 3 ? 3 : 1) * (playerData.research.mission[3] > 5 ? 4 : 1));
    staticMatBonus *= 4 * (playerData.research.perfection[2] > 1) + 1;
    staticMatBonus *= ((playerData.research.mission[4] > 1 ? 3 : 1) * (playerData.research.mission[3] > 3 ? 4 : 1) * (playerData.research.mission[3] > 5 ? 5 : 1));
    staticMatBonus *= 8 * (playerData.research.perfection[2] > 1) + 1;

    let dynamicMatBonus = Math.pow(0.01 * playerData.loopMods.zeusRankBenefits + 1, playerData.fleet.zeus.rank.current);

    let farmTimes = CalculateFarmTimes(true);

    let farms = [];

    for (let i = 0; i < farmTimes.length; i++)
    {
        if (farmTimes[i].time <= duration)
        {
            let newFarm =
            {
                id: GameDB.academy.farms[i].id,
                staticAP: GameDB.academy.farms[i].baseAP * staticAPbonus,
                staticMats: GameDB.academy.farms[i].baseMats.map(mat => mat * staticMatBonus),
                runTime: farmTimes[i].time,
                activeTime: farmTimes[i].time
            };
            farms.push(newFarm);
        }
    }

    let missionYield = 0;
    let apYield = playerData.academy.ap;
    let matYield = [...playerData.academy.stock];
    let rankProgress = playerData.fleet.zeus.rank.progress;
    let yieldRank = playerData.fleet.zeus.rank.current;

    while (duration > 0)
    {
        farms.sort((a,b) => { return a.activeTime - b.activeTime; });
        let subTime = farms[0].activeTime;

        if (subTime > duration + 60) break;

        for (let i = 0; i < farms.length; i++)
        {
            farms[i].activeTime -= subTime;

            if (farms[i].activeTime <= 0)
            {
                farms[i].activeTime = farms[i].runTime;
                for (let mat = 0; mat < farms[i].staticMats.length; mat++)
                {
                    missionYield++;
                    apYield += farms[i].staticAP;
                    matYield[mat] += farms[i].staticMats[mat] * dynamicMatBonus;
                }

                rankProgress++;
            }
        }

        if (rankProgress >= GameDB.fleet.zeus.rankRequirements[yieldRank])
        {
            rankProgress -= GameDB.fleet.zeus.rankRequirements[yieldRank];
            yieldRank++;
            dynamicMatBonus = Math.pow(0.01 * playerData.loopMods.zeusRankBenefits + 1, yieldRank);
        }

        duration -= subTime;
    }

    return {missionYield, apYield, matYield};
}
