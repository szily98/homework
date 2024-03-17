const inkLevels1 = {
    'cyan': 23,
    'magenta': 12,
    'yellow': 10
};

const inkLevels2 = {
    'cyan': 432,
    'magenta': 543,
    'yellow': 777
};

const inkLevels3 = {
    'cyan': 700,
    'magenta': 700,
    'yellow': 0
};

function getMaxPages(inkLevels) {

    const minInkLevel = Math.min(...Object.values(inkLevels));
    return minInkLevel;
}


console.log("Maximum pages for inkLevels1:", getMaxPages(inkLevels1));
console.log("Maximum pages for inkLevels2:", getMaxPages(inkLevels2));
console.log("Maximum pages for inkLevels3:", getMaxPages(inkLevels3));