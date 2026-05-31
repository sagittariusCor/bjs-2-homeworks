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
    if(!this.marks || this.marks.length === 0) {
        return 0;
    }
        let sum = this.marks.reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks.length;
    
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
  
}
