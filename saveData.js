/*

PLAYER DATA CHANGE LOG

*/

const blankPlayer =
{
    version: 12, // Super Assistant version, facilitates automatic updating of player data object when new properties are added.
    activePortal: 'academyEffector',
    colorProfile: {
        academyProjects: [
            '#444444', '#CCCC44', '#44CC44', '#4444CC'
        ]
    },
    level: 0, // Player level
    loopsFilled: 0,
    timing:
    {
        tick: 8, // in seconds
        op: 65, // in ticks
        study: 10 // in ticks
    },
    fleet:
    {
        cradle: {},
        auxesia: {},
        zagreus: {},
        hephaestus: {},
        demeter: {},
        koios: {},
        zeus:
        {
            evo: 0,
            rank: {current: 0, progress: 0, goal: 1},
            freePoints: 0,
            crew: 0,
            installs: 
            [
                0, // Cells Gained *= (0.5 * [level] * [Missions Completed] * [Zeus Crew] + 1)
                0, // AP Gained *= (0.1 * [level] * [Zeus Crew] + 1)
                0, // Mission Materials *= (0.25 * [level] * [Zeus Crew] + 1)
                0, // [Cells Gained, Shards Gained] *= (0.005 * [level] * [Missions Completed] * [Zeus Crew] + 1)
                0, // [Cells Gained, RP Gained] *= (0.005 * [level] * [Missions Completed] * [Zeus Crew] + 1)
                0, // [MP Gained, Mission Materials] *= (0.1 * [level] * [Zeus Crew] + 1)
                0, // [All Gen Output, AP Gained] *= (0.01 * [level] * [Zeus Crew] + 1)
                0, // All Gen Output *= (0.01 * [level] * [Missions Completed] * [Zeus Crew] + 1)
                0, // Cells Gained *= (0.05 * [level] * [Missions Completed] * [Zeus Crew] + 1)
                0, // RP Gained *= (0.01 * [level] * [Missions Completed] * [Zeus Crew] + 1)
                0 // Shards Gained *= (0.01 * [level] * [Missions Completed] * [Zeus Crew] + 1)
            ]
        }
    },
    loopMods:
    {
        zeusRankBenefits: 0, // Mission Materials *= pow(0.01 * [Zeus Rank Benefits] + 1, [Zeus Rank])
        zeusCrewMotivation: 0, // AP Gained *= pow(0.005 * [Zeus Crew Motivation] + 1, [Zeus Crew])
        accumHelion: 0, // AP Gained *= pow(0.002 * [Accum Helion] +1, [Player Level])
        combatMod: 0, // AP Gained *= pow(1.1, [Combat Mod])
        materialHauling: 0, // Mission Materials *= pow(1.05, [Material Hauling])
        beyonders: 0, // [AP Gained, Mission Materials] *= pow(1.01, [Beyonders])
        destruction: 0, // AP Gained *= pow(3, [Destruction])
        swarm: 0, // Mission Materials *= pow(1.25, [Swarm]), Mission Time /= pow(1.03, [Swarm])
        expansion: 0, // Mission Materials *= pow(1.01, [Expansion])
        exodus: 0, // Exodus Exchange Output *= pow(1.25, level)
        allExchange: 0, // All Exchanges Output *= pow(1.5, level)
        looping: 0, // Mission Materials *= pow(0.0002 * [Looping] + 1, [Loops Filled]) 
        productivity: 0, // Mission Speed *= pow(1.1, [Productivity]), Mission Materials *= pow(0.002 * [Productivity] + 1, [Player Level]) 
    },
    shardMilestones:
    [
        0, // (01) Alpha
        0, // (02) Aquarius
        0, // (03) Libra
        0, // (04) Modifying
        0, // (05) Flowering
        0, // (06) Connecting
        0, // (07) Duality
        0, // (08) Morphing
        0, // (09) Producing
        0, // (10) Expanding
        0, // (11) Triangular
        0, // (12) Extracting
        0, // (13) Seeding
        0, // (14) Pathing
        0, // (15) Ritualistic
        0, // (16) Modulistic
        0, // (17) Machining
        0, // (18) Studying
        0, // (19) Lucky
        0, // (20) Duplicating
        0, // (21) Targeting
        0, // (22) Quadratic
        0, // (23) Layering
        0, // (24) Torn
        0, // (25) Duplicating
        0 // (26) Wonderous
    ],
    research:
    {
        mission:
        [
            0, // (1) [AP = (level > 2 ? 1.3 : 1) * (level > 4 ? 1.3 : 1), Materials = pow(1.5, floor(level / 2))]
            0, // (2) [AP = (level > 2 ? 1.5 : 1) * (level > 4 ? 1.5 : 1), Materials = pow(1.75, floor(level / 2))]
            0, // (3) [Mission Speed = pow(1.05, floor((level + 1) / 2)) || BUGGED = pow(1.05, floor((level + 1) / 2)) / (0.05 * (level === 6) + 1)]
            0, // (4) [AP = (level > 2 ? 2 : 1) * (level > 4 ? 3 : 1), Materials = (level > 1 ? 2 : 1) * (level > 3 ? 3 : 1) * (level > 5 ? 4 : 1)]
            0 //  (5) [AP = (level > 2 ? 3 : 1) * (level > 4 ? 4 : 1), Materials = (level > 1 ? 3 : 1) * (level > 3 ? 4 : 1) * (level > 5 ? 5 : 1)]
        ],
        perfection:
        [
            0, // (1) [AP = level > 3 ? 10 : 1]
            0, // (2) [AP = level > 3 ? 10 : 1, Materials = 4 * (level > 1) + 1]
            0, // (3) [AP = level > 3 ? 50 : 1, Materials = 4 * (level > 1) + 1, Mission Speed = (level > 4) + 1]
            0 // (4) [AP = level > 3 ? 99 : 1, Materials = 8 * (level > 1) + 1, Mission Speed = (level > 4) + 1]
        ],
        construction:
        [
            0, // (1) Project Cost = (level > 1 ? 1.5 : 1) * (level > 3 ? 2 : 1) * (level > 5 ? 2.5 : 1)]
            0, // (2) Project Cost = (level > 1 ? 2 : 1) * (level > 3 ? 3 : 1) * (level > 5 ? 4 : 1)]
        ]
    },
    academy:
    {
        personnel:
        [
            { // Mining Pods
                power: 1,
                population: 0
            },
            { // Fireteam Carriers
                power: 4,
                population: 0
            },
            { // Titan Haulers
                power: 12,
                population: 0
            },
            { // Combat Corvettes
                power: 16,
                population: 0
            }
        ],
        campaignsComplete: 0,
        farms:
        [
            [ // Planet 1
                { // Farm 1-1
                    pods: 0,
                    fireteams: 0,
                    titans: 0,
                    corvettes: 0,
                    locked: false
                },
                { // Farm 1-2
                    pods: 0,
                    fireteams: 0,
                    titans: 0,
                    corvettes: 0,
                    locked: false
                },
                { // Farm 1-3
                    pods: 0,
                    fireteams: 0,
                    titans: 0,
                    corvettes: 0,
                    locked: false
                }
            ],
            [ // Planet 2
                { // Farm 2-1
                    pods: 0,
                    fireteams: 0,
                    titans: 0,
                    corvettes: 0,
                    locked: false
                },
                { // Farm 2-2
                    pods: 0,
                    fireteams: 0,
                    titans: 0,
                    corvettes: 0,
                    locked: false
                },
                { // Farm 2-3
                    pods: 0,
                    fireteams: 0,
                    titans: 0,
                    corvettes: 0,
                    locked: false
                }
            ],
            [ // Planet 3
                { // Farm 3-1
                    pods: 0,
                    fireteams: 0,
                    titans: 0,
                    corvettes: 0,
                    locked: false
                },
                { // Farm 3-2
                    pods: 0,
                    fireteams: 0,
                    titans: 0,
                    corvettes: 0,
                    locked: false
                },
                { // Farm 3-3
                    pods: 0,
                    fireteams: 0,
                    titans: 0,
                    corvettes: 0,
                    locked: false
                }
            ]
        ],
        farmYieldSetting: { type: 0, duration: 60 },
        ap: 0,
        stock: [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        exchanges:
        {
            techSamples: 0,
                //
            fuelCells: 0,
                //
            dataCubes: 0
        },
        projectLevels: 
        [
            0, /* Cells Gained *= pow(4, level) */
            0, /* All Gen Output *= pow(2, level) */
            0, /* MP Gained *= pow(2, level) */
            0, /* Shards Gained *= pow(2, level) */
            0, /* RP Gained *= pow(2, level) */
            0, /* AP Gained *= pow(1.25, level) */
            0, /* All Gen *= pow(3, level), RP *= pow(2.5, level), AP *= pow(1.6, level) */
            0,
            0
        ],
        projectGoals:
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        gearLevels:
        [
            0, 0, 0, // Purple
            0, 0, 0, 0, // Orange
            0, 0, 0, 0, 0, // Red
            0, 0, 0, 0, 0, // Green
            0, 0, 0, 0, 0 // Blue
        ],
        gearSets: [0, 0, 0, 0, 0],
        constructionMilestones:
        [
            false, false, false, false, false, false, false, false, false, false, false, false, // 1-12
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, // 13-27
            false, false, false, false, false, false // 28-33
        ],
        cmAP: 1,
        badges:
        {
            workers: false,
            innovation: false,
            tinkering: false,
            loopers: false,
            efficiency: false,
            engineering: false
        }
    },
    diamonds:
    {
        special:
        {
            ap: 0,
            materials: 0 
        },
        cards:
        {
            nora: false, omega: false, rigel: false, utopia: false, zion: false
        }
    }
};

// Initializes to blank save in absence of preexisting save
let playerData = JSON.parse(localStorage.getItem('CifiSuperSave')) || blankPlayer;

function SavePlayerData()
{
    localStorage.setItem('CifiSuperSave', JSON.stringify(playerData));
}

function LoadPlayerData()
{
    playerData = JSON.parse(localStorage.getItem('CifiSuperSave'))
}

// Add new properties to player data object upon opening newer version of Super Assistant
function UpdatePlayerData()
{
    if (playerData.version < 4)
    {
        playerData = blankPlayer;
    }
    if (playerData.version < 5)
    {
        playerData.academy.projectGoals = [0, 0, 0, 0, 0, 0];
        playerData.research.construction = [0, 0];
        playerData.version = 5;
    }
    if (playerData.version < 6)
    {
        playerData.diamonds =
        {
            special:
            {
                ap: 0
            },
            cards:
            {
                nora: false, omega: false, rigel: false, utopia: false, zion: false
            }
        };
        playerData.version = 6;
    }
    if (playerData.version < 7)
    {
        playerData.academy.campaignsComplete = 0;
        playerData.version = 7;
    }
    if (playerData.version < 8)
    {
        playerData.fleet.zeus.evo = 0;
        playerData.version = 8;
    }
    if (playerData.version < 9)
    {
        for (let planet = 0; planet < playerData.academy.farms.length; planet++)
        {
            for (let farm = 0; farm < 3; farm++)
            {
                playerData.academy.farms[planet][farm].locked = false;
            }
        }
        playerData.version = 9;
    }
    if (playerData.version < 10)
    {
        playerData.colorProfile = {
            academyProjects: [
                '#444444', '#CCCC44', '#44CC44', '#4444CC'
            ]
        };
        playerData.version = 10;
    }
    if (playerData.version < 11)
    {
        playerData.academy.projectLevels.push(0);
        playerData.academy.projectLevels.push(0);
        playerData.academy.projectLevels.push(0);
        playerData.academy.projectGoals.push(0);
        playerData.academy.projectGoals.push(0);
        playerData.academy.projectGoals.push(0);
        playerData.version = 11;
    }
    if (playerData.version < 12)
    {
        playerData.loopsFilled = 0;
        playerData.loopMods.looping = 0;
        playerData.loopMods.productivity = 0;
        playerData.diamonds.special.materials = 0;
        playerData.version = 12;
    }
    SavePlayerData();
}

// This part is just saved for future reference from my console-based project

// const shardMS = 
// {
//     num(id) { return this[gameDB.milestones[id - 1].name]; }
// };

// function GenerateMilestoneAccess()
// {
//     for (let i = 0; i < gameDB.milestones.length; i++)
//     {
//         let milestoneName = gameDB.milestones[i].name;
//         shardMS[milestoneName] =
//         {
//             id: i,
//             name: milestoneName,
//             get lv() { return playerData.demeter.milestones[this.id]; },
//             set lv(val) { playerData.demeter.milestones[this.id] = val; SavePlayerData(); },
//             get nextTickCost()
//             {
//                 return CalculateMilestoneTickCost(shardActiveState, this.id, this.lv);
//             },
//             get stageTickCost()
//             {
//                 return CalculateMilestoneTickCost(shardActiveState, this.id, this.lv, GetMilestoneNextStage(this.id, this.lv));
//             }
//         };
//     }
// }

// GenerateMilestoneAccess();

// Run automatic update of player data when the Super Assistant it was saved from is outdated
if (playerData.version < blankPlayer.version) UpdatePlayerData();
