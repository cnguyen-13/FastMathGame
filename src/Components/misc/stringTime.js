exports.calculateTimeString = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    let secondsStringed;
    if (seconds < 10) {
        secondsStringed = `0${seconds}`;
    } else {
        secondsStringed = `${seconds}`;
    }
    return `${minutes}:${secondsStringed}`;
};
