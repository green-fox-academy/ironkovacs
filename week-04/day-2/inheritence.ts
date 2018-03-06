'use strict';
class Person {
  name: string;
  age: number;
  gender: string;

  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}.`)
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
  constructor(name?: string, age?: number, gender?: string) {
    if (name !== undefined) {
      this.name = name;
    } else {
      this.name = 'Jane Doe';
    }
    if (age !== undefined) {
      this.age = age;
    } else {
      this.age = 30
    }
    if (gender !== undefined) {
      this.gender = gender;
    } else {
      this.gender = 'female';
    }
  }
}

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  getGoal() {
    console.log('My goal is: be a junior software developer.');
  }
  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} from the course already.`)
  }
  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
    super(name, age, gender)
    if (previousOrganization !== undefined) {
      this.previousOrganization = previousOrganization;
    } else {
      this.previousOrganization = 'The School of Life';
      this.skippedDays = 0;
    }
  }
}

class Mentor extends Person {

  level: string;

  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
  }
  getGoal() {
    console.log('Educate brilliant junior software developers');
  }
  constructor(name?: string, age?: number, gender?: string, level?: string) {
    super(name, age, gender);
    if (level !== undefined) {
      this.level = level;
    } else {
      this.level = 'intermediate'
    }
  }
}

class Sponsor extends Person {

  company: string;
  hiredStudents: number = 0;

  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} so far.`);
  }
  getGoal() {
    console.log('Hire brilliant junior software developers.');
  }
  hire() {
    this.hiredStudents++;
  }
  constructor(name?: string, age?: number, gender?: string, company?: string) {
    super(name, age, gender);
    if (company !== undefined) {
      this.company = company;
    } else {
      this.company = 'Microsoft' 
    }
  }
}

class Cohort {
  name: string = 'dsdad';
  students: Student[] = [];
  mentors: Mentor[] = [];

  addStudent(Student) {
    this.students.push(Student);
  }
  addMentor(Mentor) {
    this.mentors.push(Mentor);
  }
  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors`);
  }
  constructor(name: string) {
    this.name = name;
  }
}
//TEST

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);
student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();