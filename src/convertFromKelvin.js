// Convert to Fahrenheit.
const convertFromKelvin = num => {
  // Formula Kelvin to F.
  const numToF = (num - 273.15) * 1.8 + 32;
  // Charcode for Degree symbol.
  const degrees = String.fromCharCode(176);
  // Return template literal of number + degree symbol.
  return `${numToF.toFixed()}${degrees}`;
};

export default convertFromKelvin;
