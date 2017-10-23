const getRadius = (ratio, radius) => {
  const lengthCircle = Math.floor(2 * Math.PI * radius);
  const stroke = ratio * lengthCircle;
  const offset = lengthCircle - stroke;
  // console.log(stroke, offset);

  return {
    stroke,
    offset
  };
};

export default getRadius;
