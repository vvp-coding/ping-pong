class Angle {
  
  /**
   * Returns value of the angle converted from Degrees to Radians
   * @param {number} angle angle value in Degees
   */
  static toRad(angle) {
    if(Number(angle)) {
      return angle * Math.PI / 180;
    }

    throw new TypeError("angle must be a numeric value!");
  }

  /**
   * Returns value of the angle converted from Radians to Degrees
   * @param {number} angle 
   */
  static toDeg(angle) {
    if(Number(angle)) {
      return angle * 180 / Math.PI;
    }

    throw new TypeError("angle must be a numeric value!");
  }
}

export { Angle };