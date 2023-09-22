export const genColor = (value) => {
  var hue = ((1 - value) * 120).toString(10);
  return ['hsl(', hue, ',100%,50%)'].join('');
};
