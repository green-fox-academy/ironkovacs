module.exports = (frames) => {
  let result = 0;

  return frames
    .map((frame, index) => {
      if ((frame[0] + frame[1]) === 10 && frames[index + 1] !== undefined) {
        return 10 + frames[index + 1][0];
      }
      return frame[0] + frame[1];
    })
    .reduce((acc, currentValue) => acc + currentValue);
}