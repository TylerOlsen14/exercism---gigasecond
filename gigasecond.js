export const gigasecond = (gs) => {
    const Gigasecond = Math.pow(10,12);
    const d = new Date(gs);
    // const t = new Date(gs)
    const t = d.getTime(gs);
    const newDate = t + Gigasecond;

    return new Date(newDate);
};