//Calculate time in a x:yy format ex. 5:09, 12:59

exports.calculateTimeString = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    const secondsStringed = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${secondsStringed}`;
};
