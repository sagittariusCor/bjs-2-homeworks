function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}
let student = new Student('Tanya', 'female', 17);
let student2 = new Student('Alex', 'male', 18); 

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if(this.marks) {
        this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function () {
  
}

Student.prototype.exclude = function (reason) {
  
}
