let GameDB =
{
    academy:
    {
        farms: // baseTimes are in minutes
        [
            {
                id: 11,
                baseTime: 30,
                maxPop: 20,
                baseMats: // Difar
                [
                    38, 0, 0, 0, 0, 0, 0, 0
                ]
            },
            {
                id: 12,
                baseTime: 360,
                maxPop: 60,
                baseMats: // Kento
                [
                    0, 320, 0, 0, 0, 0, 0, 0
                ]
            },
            {
                id: 13,
                baseTime: 2400,
                maxPop: 100,
                baseMats: // Difar, Kento, Chromium
                [
                    1350, 280, 760, 0, 0, 0, 0, 0
                ]
            },
            {
                id: 21,
                baseTime: 150,
                maxPop: 80,
                baseMats: // Exon
                [
                    0, 0, 0, 20, 0, 0, 0, 0
                ]
            },
            {
                id: 22,
                baseTime: 2400,
                maxPop: 160,
                baseMats: // Chromium, Organium
                [
                    0, 0, 560, 0, 80, 0, 0, 0
                ]
            },
            {
                id: 23,
                baseTime: 72000,
                maxPop: 500,
                baseMats: // Exon, Organium, Adamorphium
                [
                    0, 0, 0, 2200, 320, 260, 0, 0
                ]
            },
            {
                id: 31,
                baseTime: 3000,
                maxPop: 150,
                baseMats: // Moskom
                [
                    0, 0, 0, 0, 0, 0, 19, 0
                ]
            },
            {
                id: 32,
                baseTime: 975000,
                maxPop: 2000,
                baseMats: // Darkseid
                [
                    0, 0, 0, 0, 0, 0, 0, 80
                ]
            },
            {
                id: 33,
                baseTime: 1875000,
                maxPop: 4000,
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
                costScalar: 1.25
            },
            {
                name: 'Transfer Wires',
                baseCosts:
                [
                    2750, 1500, 500, 0, 0, 0, 0, 0
                ],
                costScalar: 1.4
            },
            {
                name: 'Bio-Mechanics Lab',
                baseCosts:
                [
                    0, 0, 2400, 1000, 500, 0, 0, 0
                ],
                costScalar: 1.7
            },
            {
                name: 'Exo-Energy',
                baseCosts:
                [
                    0, 7000, 5000, 1500, 1500, 0, 0, 0
                ],
                costScalar: 1.4
            },
            {
                name: 'Defensive Research',
                baseCosts:
                [
                    0, 0, 0, 0, 0, 1000, 200, 0
                ],
                costScalar: 1.6
            },
            {
                name: 'Warp-Drive Lab',
                baseCosts:
                [
                    0, 0, 0, 0, 260000, 120000, 28000, 28000
                ],
                costScalar: 2
            }
        ] // END .projects
    }
};

