
let table=document.getElementById('table');

function grades(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
Student.allstudent =[];

function Student(name,course){
  this.name=name;
  this.course=course;
  this.grade=grades(0,100);
  this.status ='';
  Student.allstudent.push(this);
}

let firstRow=document.createElement('tr');
table.appendChild(firstRow);
let thElement1=document.createElement('th');
firstRow.appendChild(thElement1);
thElement1.textContent='Student Name';
let thElement2=document.createElement('th');
firstRow.appendChild(thElement2);
thElement2.textContent='Student Grade';
let thElement3=document.createElement('th');
firstRow.appendChild(thElement3);
thElement3.textContent='Course';
let thElement4=document.createElement('th');
firstRow.appendChild(thElement4);
thElement4.textContent='Status';

Student.prototype.studentStatus = function(){
  if (this.grade >= 50){
    this.status='PASS';
  }
  else{
    this.status='FAIL';
  }
};
Student.prototype.render = function(){
  let secondRow=document.createElement('tr');
  table.appendChild(secondRow);
  let tdElement1=document.createElement('td');
  secondRow.appendChild(tdElement1);
  tdElement1.textContent=this.name;
  let tdElement2=document.createElement('td');
  secondRow.appendChild(tdElement2);
  tdElement2.textContent=this.grade;
  let tdElement3=document.createElement('td');
  secondRow.appendChild(tdElement3);
  tdElement3.textContent=this.course;
  let tdElement4=document.createElement('td');
  secondRow.appendChild(tdElement4);
  tdElement4.textContent=this.status;

};
let form=document.getElementById('form');
form.addEventListener('submit',handle);
function handle(event){
  event.preventDefault();
  let studentName= event.target.studentName.value;
  let studentCourse=event.target.course.value;
  let newStudent =new Student(studentName,studentCourse);
  newStudent.studentStatus();
  newStudent.render();
  saveData();
}

function saveData(){
  let data = JSON.stringify(Student.allstudent);
  localStorage.setItem('studentData',data);
}
function gitData(){
  let preData = localStorage.getItem('studentData');
  let studentData2=JSON.parse(preData);
  if(studentData2 !== null){
    for(let i=0;i<studentData2.length;i++) {
      new Student(studentData2[i].name,studentData2[i].course);
      console.log(studentData2[i].name);
    }
  }

}
gitData();
for(let j=0;j<Student.allstudent.length;j++){
  Student.allstudent[j].status;
  console.log(Student.allstudent[j].name);
  Student.allstudent[j].render;


}


  