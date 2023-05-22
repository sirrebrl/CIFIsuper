let GameDB =
{
    bugs:
    {
        destruction: true,
        wonderous: true,
        swarm: true,
        mission3: true,
        construction: true
    },
    academy:
    {
        personnel:
        [
            'pods', 'fireteams', 'titans', 'corvettes'
        ],
        planets: 3,
        farms: // baseTimes are in minutes
        [
            {
                id: 11,
                baseTime: 30,
                maxPop: 20,
                baseAP: 62,
                baseMats: // Difar
                [
                    38, 0, 0, 0, 0, 0, 0, 0
                ]
            },
            {
                id: 12,
                baseTime: 360,
                maxPop: 60,
                baseAP: 1862,
                baseMats: // Kento
                [
                    0, 320, 0, 0, 0, 0, 0, 0
                ]
            },
            {
                id: 13,
                baseTime: 2400,
                maxPop: 100,
                baseAP: 14900,
                baseMats: // Difar, Kento, Chromium
                [
                    1350, 280, 760, 0, 0, 0, 0, 0
                ]
            },
            {
                id: 21,
                baseTime: 150,
                maxPop: 80,
                baseAP: 434,
                baseMats: // Exon
                [
                    0, 0, 0, 20, 0, 0, 0, 0
                ]
            },
            {
                id: 22,
                baseTime: 2400,
                maxPop: 160,
                baseAP: 2213,
                baseMats: // Chromium, Organium
                [
                    0, 0, 560, 0, 80, 0, 0, 0
                ]
            },
            {
                id: 23,
                baseTime: 72000,
                maxPop: 500,
                baseAP: 143100,
                baseMats: // Exon, Organium, Adamorphium
                [
                    0, 0, 0, 2200, 320, 260, 0, 0
                ]
            },
            {
                id: 31,
                baseTime: 3000,
                maxPop: 150,
                baseAP: 24850,
                baseMats: // Moskom
                [
                    0, 0, 0, 0, 0, 0, 19, 0
                ]
            },
            {
                id: 32,
                baseTime: 975000,
                maxPop: 2000,
                baseAP: 12375000,
                baseMats: // Darkseid
                [
                    0, 0, 0, 0, 0, 0, 0, 80
                ]
            },
            {
                id: 33,
                baseTime: 1875000,
                maxPop: 4000,
                baseAP: 24840000,
                baseMats: // Organium, Adamorphium, Moskom, Darkseid
                [
                    0, 0, 0, 0, 5200, 2440, 3980, 160
                ]
            }
        ], // END .farms
        projects:
        [
            {
                name: 'Storage Facility',
                baseCosts:
                [
                    600, 200, 0, 0, 0, 0, 0, 0
                ],
                costScalar: 1.25,
                costBump: 0.016
            },
            {
                name: 'Transfer Wires',
                baseCosts:
                [
                    2750, 1500, 500, 0, 0, 0, 0, 0
                ],
                costScalar: 1.4,
                costBump: 0.05
            },
            {
                name: 'Bio-Mechanics Lab',
                baseCosts:
                [
                    0, 0, 2400, 1000, 500, 0, 0, 0
                ],
                costScalar: 1.7,
                costBump: 0.09
            },
            {
                name: 'Exo-Energy',
                baseCosts:
                [
                    0, 7000, 5000, 1500, 1500, 0, 0, 0
                ],
                costScalar: 1.4,
                costBump: 0.07
            },
            {
                name: 'Defensive Research',
                baseCosts:
                [
                    0, 0, 0, 0, 0, 1000, 200, 0
                ],
                costScalar: 1.6,
                costBump: 0.08
            },
            {
                name: 'Warp-Drive Lab',
                baseCosts:
                [
                    0, 0, 0, 0, 260000, 120000, 28000, 28000
                ],
                costScalar: 2,
                costBump: 0.11
            }
        ],
        projectNextLevelCost(projectID, level, costDiv)
        {
            let project = this.projects[projectID];
            return project.baseCosts.map(mat => {
                return mat * Math.pow(project.costScalar + (project.costBump * Math.floor(level / 100)), level) / costDiv;
            });
        } // END .projects
    },
    fleet:
    {
        zeus:
        {
            rankRequirements: [
                1, 5, 9, 25, 33, 41, 73, 85, 97, 145, 201, 221, 
                301, 326, 351, 451, 481, 511, 631, 666, 877, 1052, 
                1102, 1152, 1352, 1408, 1464, 1689, 1752, 1814, 2580,
                2666, 2752, 3096, 3189, 3283, 3658, 3760, 3861, 4268,
                5471, 5608, 6155, 6301, 6448, 7034, 7190, 7346, 7971, 
                8137, 10379, 11209, 11429, 11649, 12527, 12759, 12991, 
                13919, 14163, 14407, 19230, 19550, 19871, 21152, 21488,
                21824, 23167, 23518, 23869, 25272, 32048, 32506, 34337, 
                34814, 35291, 37198, 37694, 38190, 40174, 40689, 51504,
                54079, 54747, 55414, 58085, 58776, 59468, 62233, 62948, 63664, 83156
            ]
        }
    }
};

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
