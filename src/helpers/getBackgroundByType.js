export const getBackgroundByType = (type) => {
    switch (type) {
        case 'grass':

            return {
                bgCpGrass: 'bg-cp-grass',
                bgBgGrass: 'bg-bg-grass',
                color: 'green',
                backgroundPerType: 'bgPerGrass'
            }

        case 'fire':

            return {
                bgCpGrass: 'bg-cp-fire',
                bgBgGrass: 'bg-bg-fire',
                color: 'red',
                backgroundPerType: 'bgPerFire'
            }
        case 'water':

            return {
                bgCpGrass: 'bg-cp-water',
                bgBgGrass: 'bg-bg-water',
                color: 'blue',
                backgroundPerType: 'bgPerWater'
            }

        case 'normal':

            return {
                bgCpGrass: 'bg-cp-normal',
                bgBgGrass: 'bg-bg-normal',
                color: 'orange',
                backgroundPerType: 'bgPerNormal'
            }

        case 'fighting':

            return {
                bgCpGrass: 'bg-cp-fighting',
                bgBgGrass: 'bg-bg-fighting',
                color: 'orange',
                backgroundPerType: 'bgPerFighting'
            }

        case 'flying':

            return {
                bgCpGrass: 'bg-cp-flying',
                bgBgGrass: 'bg-bg-flying',
                color: 'grey',
                backgroundPerType: 'bgPerFlying'
            }

        case 'poison':

            return {
                bgCpGrass: 'bg-cp-poison',
                bgBgGrass: 'bg-bg-poison',
                color: 'purple',
                backgroundPerType: 'bgPerPoison'
            }

        case 'ground':

            return {
                bgCpGrass: 'bg-cp-ground',
                bgBgGrass: 'bg-bg-ground',
                color: 'brown',
                backgroundPerType: 'bgPerGround'
            }

        case 'rock':

            return {
                bgCpGrass: 'bg-cp-rock',
                bgBgGrass: 'bg-bg-rock',
                color: 'brown',
                backgroundPerType: 'bgPerRock'
            }

        case 'bug':

            return {
                bgCpGrass: 'bg-cp-bug',
                bgBgGrass: 'bg-bg-bug',
                color: 'green',
                backgroundPerType: 'bgPerBug'
            }

        case 'ghost':

            return {
                bgCpGrass: 'bg-cp-ghost',
                bgBgGrass: 'bg-bg-ghost',
                color: 'ghost',
                backgroundPerType: 'bgPerGhost'
            }

        case 'steel':

            return {
                bgCpGrass: 'bg-cp-steel',
                bgBgGrass: 'bg-bg-steel',
                color: 'grey',
                backgroundPerType: 'bgPerSteel'
            }

        case 'electric':

            return {
                bgCpGrass: 'bg-cp-electric',
                bgBgGrass: 'bg-bg-electric',
                color: 'yellow',
                backgroundPerType: 'bgPerElectric'
            }

        case 'psychic':

            return {
                bgCpGrass: 'bg-cp-psychic',
                bgBgGrass: 'bg-bg-psychic',
                color: 'orange',
                backgroundPerType: 'bgPerPhysic'
            }

        case 'ice':

            return {
                bgCpGrass: 'bg-cp-ice',
                bgBgGrass: 'bg-bg-ice',
                color: 'blue',
                backgroundPerType: 'bgPerIce'
            }

        case 'dragon':

            return {
                bgCpGrass: 'bg-cp-dragon',
                bgBgGrass: 'bg-bg-dragon',
                color: 'purple',
                backgroundPerType: 'bgPerDragon'
            }

        case 'dark':

            return {
                bgCpGrass: 'bg-cp-dark',
                bgBgGrass: 'bg-bg-dark',
                color: 'dark',
                backgroundPerType: 'bgPerDark'
            }

        case 'fairy':

            return {
                bgCpGrass: 'bg-cp-fairy',
                bgBgGrass: 'bg-bg-fairy',
                color: 'fairy',
                backgroundPerType: 'bgPerFairy'
            }

        case 'unknown':

            return {
                bgCpGrass: 'bg-cp-unknown',
                bgBgGrass: 'bg-bg-unknown',
                color: 'unknown',
                backgroundPerType: 'bgPerUnknow'
            }

        case 'shadow':

            return {
                bgCpGrass: 'bg-cp-shadow',
                bgBgGrass: 'bg-bg-shadow',
                color: 'shadow',
                backgroundPerType: 'bgPerShadow'
            }

        default:
            return {
                bgCpGrass: 'bg-cp-grass',
                bgBgGrass: 'bg-bg-grass',
                color: 'green'
            }

    }
}