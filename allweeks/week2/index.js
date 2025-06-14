// class Rectangle{
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     };
//     area(){
//         return this.width*this.height;
//     }
//     paint(){
//         console.log(`paint with the ${this.color} color`);
//     }
// }

// const rect = new Rectangle(2,4,'red')
// const area = rect.area();
// console.log(area);
// rect.paint();

class Fullsd{
    constructor(classes, assignments, projects){
        this.classes = classes;
        this.assignments = assignments;
        this.projects = projects;
    };
    proj(){
        console.log(`Build ${this.projects} projects acc. to  ${this.classes} classes and  ${this.assignments} assignments`);
    };
}

const cohort = new Fullsd(20,30,10);
cohort.proj();