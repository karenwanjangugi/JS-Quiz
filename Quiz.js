// class CustomerOrder{
// constructor(orderId, items, status)
//     {
//         this.orderId = orderId
//         this.items = items
//         this.status = status
// }

const { rejects } = require("assert");
const { resolve } = require("path");

// }


// CustomerOrder.prototype.calculateTotal = function () {
//     let sum = 0;
//     for(let order in orders){
//         for (let i = 0; i < this.items.length; i++) {
//         sum += this.items[i].price; 
//     }
//     return sum;}
// }

// const orders = new CustomerOrder(
   
//     "001",[{
//         name: "soap",
//         quantity: "2kg",
//         price: 200
//     },{
//         name: "soap",
//         quantity: "2kg",
//         price: 200
//     },{
//         name: "soap",
//         quantity: "2kg",
//         price: 200
//     }
// ], "Pending")

// new CustomerOrder("002",[{
//     name: "soap",
//     quantity: "2kg",
//     price: 200
// },{
//     name: "soap",
//     quantity: "2kg",
//     price: 200
// },{
//     name: "soap",
//     quantity: "2kg",
//     price: 200
// }
// ], "Pending")

// new CustomerOrder("003",[{
//     name: "soap",
//     quantity: "2kg",
//     price: 200
// },{
//     name: "soap",
//     quantity: "2kg",
//     price: 200
// },{
//     name: "soap",
//     quantity: "2kg",
//     price: 200
// }
// ], "Pending"
// )

// console.log(orders.calculateTotal())





class TeamMember {
    constructor(name, role, tasks) {
      this.name = name;
      this.role = role;
      this.tasks = tasks;
    }
  
    completeTask(taskTitle) {
      if (this.tasks && this.tasks.some(task => task.taskTitle === "completed")) {
        console.log(`${taskTitle} is completed`);
      } else {
        console.log(`${taskTitle} is not completed`);
      }
    }
  
    async checkProgress() {
      return new Promise((resolve, reject) => {
        if (this.tasks && this.tasks.every(task => task.status === "completed")) {
          resolve(`All tasks completed!`);
        } else {
          reject(`Pending tasks remaining`);
        }
      });
    }
  }
  
  const member1 = new TeamMember("Kiuy", "leader", [
    { taskTitle: "task1", status: "completed" },
    { taskTitle: "task2", status: "completed" }
  ]);
  
  const member2 = new TeamMember("Kisa", "manager", [
    { taskTitle: "task3", status: "completed" },
    { taskTitle: "task4", status: "Not completed" }
  ]);
  
  member1.checkProgress()
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  member2.checkProgress()
    .then(result => console.log(result))
    .catch(error => console.log(error));


// class Candidates{
//     constructor(name, position, interviews){
//         this.name = name
//         this.position = position
//         this.interviews = interviews
//     }
// }

// Candidates.prototype.scheduleInterviews = function(date) {



// }
// Candidates.prototype.sendConfirmation = function() {

// }

// class Course{
//     constructor(title,instructor,students){
//         this.title = title
//         this.instructor = instructor
//         this.students = students
//     }
//     updateProgress(studentName, value){
        
//     }
//     generateCertificate(studentName){

//     }
//     }

// class StockTracker{
//     constructor( watchList){
//         this.watchList = watchList
//     }
//     updatePrice(){

//     }
// }


