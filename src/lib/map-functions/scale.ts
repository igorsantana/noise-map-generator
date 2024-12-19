const scale = (yRange: number[], xRange: number[]) => {
    const [xMin, xMax] = xRange;
    const [yMin, yMax] = yRange;

    return (inputY: number) => {
        const percent = (inputY - yMin) / (yMax - yMin);
        const outputX = percent * (xMax - xMin) + xMin;
        return outputX;
    }
};

export default scale