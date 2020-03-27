
export const timerFormatter = sec => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    let mins_formatted;
    let secs_formatted;

    if (mins < 10) {
        mins_formatted = `0${mins}`;
    } else {
        mins_formatted = mins;
    };

    if (secs < 10) {
        secs_formatted = `0${secs}`;
    } else {
        secs_formatted = secs;
    };

    return `${mins_formatted}:${secs_formatted}`;
}