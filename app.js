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
    return appetizers = this.appetizers.push({name: appIn[0], price: appIn[1]});
  },
  set mains(mainIn) {
    return mains = this.mains.push({name: mainIn[0], price: mainIn[1]});
  },
  set desserts(dessertIn) {
    return desserts = this.desserts.push({name: dessertIn[0], price: dessertIn[1]});
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return menu._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    let dishes = menu._courses[courseName];
    let dishNum = (Math.random()*dishes.length);
    let dish = Math.floor(dishNum);
    return console.log(dishes[dish]);
  },
  generateRandomMeal() {
    

  }
}
menu.appetizers = ["a", "b"];
menu.appetizers = ["food", "2"];
menu.appetizers = ["lard", 12];
// menu.appetizers = "13 slimjim"
menu.mains = ["fish", "$1_000"];
menu.mains = ["fishy chicken", "$10"];
menu.addDishToCourse("desserts", "sweet butts", "if you have to ask...");
menu.addDishToCourse("desserts", "swxgdxgs", "i575452.");
menu.getRandomDishFromCourse("appetizers")
