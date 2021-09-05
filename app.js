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
    return dishes[dish];
  },
  generateRandomMeal() {
    let meal= [];
    let bill = 0;
    for (let course in this._courses) {
      bill += course.price;
      meal.push(menu.getRandomDishFromCourse(course));
    }
      return console.log(meal);
  }
}
menu.appetizers = ["salad", 10];
menu.appetizers = ["franks in a blanket", 8];
menu.appetizers = ["bruschetta", 12];
menu.addDishToCourse("appetizers", "cheese platter", 15);
menu.mains = ["filet mignon", 30]
menu.mains = ["tofurkey", 15];
menu.mains = ["chicken", 20];
menu.addDishToCourse("mains", "tuna steak", 25);
menu.desserts = ["mango sorbet", 8];
menu.addDishToCourse("desserts", "assorted macaroons", 10);
menu.addDishToCourse("desserts", "tiramisu", 10);
menu.generateRandomMeal();
