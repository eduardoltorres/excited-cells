const excitedCells = (config, k) => {
    let newConfig = []
    for (let i = 0; i < k; i++) {
        if (newConfig.length > 0) {
            config = newConfig
            newConfig = []
        }

        for (let j = 0; j < config.length; j++) {
            if (j == 0) {
                if (config[config.length-1] === config[j+1]) {
                    newConfig.push(0)
                } else if (config[config.length-1] === 1 || config[j+1] === 1) {
                    newConfig.push(1)
                }
            } else if (j == (config.length - 1)) {
                if (config[0] === config[j-1]) {
                    newConfig.push(0)
                } else if (config[0] === 1 || config[j-1] === 1) {
                    newConfig.push(1)
                }
            } else {
                if (config[j-1] === config[j+1]) {
                    newConfig.push(0)
                } else if (config[j-1] === 1 || config[j+1] === 1) {
                    newConfig.push(1)
                }
            }
        }
    }
    return newConfig
}
