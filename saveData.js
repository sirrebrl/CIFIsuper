/*

PLAYER DATA CHANGE LOG

*/

const blankPlayer =
{
    version: 1, // Super Assistant version, facilitates automatic updating of player data object when new properties are added.
    level: 0, // Player level
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
            rank: {current: 0, progress: 0, goal: 1},
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
        swarm: 0, // Mission Materials *= pow(1.25, [Swarm])
        expansion: 0 // Mission Materials *= pow(1.01, [Expansion])
    },
    research:
    {
        MissionAnalysis1: 0, // Mission Materials *= pow(1.5, floor([Mission Analysis 1] / 2))
        MissionAnalysis2: 0 // Mission Materials *= pow(1.75, floor([Mission Analysis 2] / 2))
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
            0 /* AP Gained *= pow(1.25, level) */
        ],
        gearLevels:
        [
            0, 0, 0, // Purple
            0, 0, 0, 0, // Orange
            0, 0, 0, 0, 0, // Red
            0, 0, 0, 0, 0, // Green
            0, 0, 0, 0, 0 // Blue
        ],
        constructionMilestones:
        [
            false, false, false, false, false, false, false, false, false, false, false, false, // 1-12
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, // 13-27
            false, false, false, false, false, false // 28-33
        ],
        badges:
        {
            Workers: false,
            Innovation: false,
            Tinkering: false,
            Loopers: false,
            Efficiency: false,
            Engineering: false
        }
    }
};

// Initializes to blank save in absence of preexisting save
let playerData = JSON.parse(localStorage.getItem('CifiSuperSave')) || blankPlayer;

function SavePlayerData()
{
    localStorage.setItem('CIFIplayerdata', JSON.stringify(playerData));
}

function LoadPlayerData()
{
    playerData = JSON.parse(localStorage.getItem('CIFIplayerdata'))
}

// Add new properties to player data object upon opening newer version of Super Assistant
function UpdatePlayerData()
{

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