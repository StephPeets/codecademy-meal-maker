let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  // set _courses(course) {
  //   return {
  //     appetizers: this.appetizers.push(course),
  //     mains: this.mains,
  //     desserts: this.desserts
  //   }
  get appetizers() {
    return this.courses.appetizers;
  },
  get mains() {
    return this.courses.mains;
  },
  get desserts() {
    return this.courses.desserts;
  },
  set appetizers(appIn) {
    return appetizers = this.appetizers.push(appIn);
  },
  set mains(mainIn) {
    return mains = this.mains.push(mainIn);
  },
  set desserts(dessertIn) {
    return desserts = this.desserts.push(dessertIn);
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return menu[courseName] = dish;
  }
}

// console.log(menu.addDishToCourse(desserts, "food", 35));
//  menu._courses.appetizers.push("food");
menu.addDishToCourse("appetizers", "moreFood", "$12")
menu.addDishToCourse("desserts", "moredessert", "$80")
menu.addDishToCourse("desserts", "tiramoredessert", "$5000")
console.log(menu._courses)






