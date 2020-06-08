exports.calculateAccuracy = (correct, total) => {
    const percentage = Math.round((correct / total) * 100);
    return `${percentage} %`;
};
