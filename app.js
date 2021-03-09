'use strict';
function randomAge(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
  let dive1=document.getElementById ('contanier');
  let table =document.createElement('table');
  dive1.appendChild(table);

  let dive2=document.getElementById ('list');
  




let arrOfstue=[];
function Student(studentEmail,mobilNum,tution) {

    this.studentEmail=studentEmail;
    this.mobilNum=mobilNum;
    this.tution=tution;
    arrOfstue.push(this);
    this.age=0;
    this.id=0;
    this.name=[];
    this.total=0;
    
}

Student.prototype.updateAge=function () {
    this.age=randomAge(18,24);
    }
 
    Student.prototype.idnum=function () {
        for (let i = 0; i<  arrOfstue.length; i++) {
            this.id=i;
            
            
        }
    }
    Student.prototype.totales=function () {
        this.total=this.total+this.tution;
        }

        Student.prototype.namefield=function () {
        this.name = this.studentEmail.replace(/@[^@]+$/, '');
        }

    function header() {
        let tr =document.createElement('tr');
        table.appendChild(tr);

        let th1=document.createElement('th');
        tr.appendChild(th1);
        th1.textContent='id';

        let th2=document.createElement('th');
        tr.appendChild(th2);
        th2.textContent='name';
        let th3=document.createElement('th');
        tr.appendChild(th3);
        th3.textContent='Email';
        let th4=document.createElement('th');
        tr.appendChild(th4);
        th4.textContent='mobile';
        let th5=document.createElement('th');
        tr.appendChild(th5);
        th5.textContent='age';
        let th6=document.createElement('th');
        tr.appendChild(th6);
        th6.textContent='tutiton';

        
    }

header();

Student.prototype.render=function () {
    let tr2 =document.createElement('tr');
        table.appendChild(tr2);

        let td1=document.createElement('th');
        tr2.appendChild(td1);
        td1.textContent=this.id;

        let td2=document.createElement('th');
        tr2.appendChild(td2);
        td2.textContent=this.name;

        let td3=document.createElement('th');
        tr2.appendChild(td3);
        td3.textContent=this.studentEmail;
        let td4=document.createElement('th');
        tr2.appendChild(td4);
        td4.textContent=this.mobilNum;
        let td5=document.createElement('th');
        tr2.appendChild(td5);
        td5.textContent=this.age;
        let td6=document.createElement('th');
        tr2.appendChild(td6);
        td6.textContent=this.tution;

          
}
 function footerrender() {
    let trf =document.createElement('tr');
    table.appendChild(trf);
    let tdf=document.createElement('th');
    trf.appendChild(tdf);
    tdf.textContent= `Totale ${this.total}` ;

    
 }

 function savestudent() {
     let save=JSON.stringify(arrOfstue);
     localStorage.setItem('allstudent',save);
     
 }
 function getstudent() {
     let getlist=JSON.parse(localStorage.getItem('allstudent'));
     let olel=document.createElement('ol');
     dive2.appendChild(olel);

     let liget=document.createElement('li');
     olel.appendChild(liget);



     if (getlist) {
         getlist=allstudent;

         for (let i = 0; i < arrOfstue.length; i++) {

        liget.textContent=`${getlist[i].this.studentEmail} has mobole numbr ${getlist[i].this.mobilNum}  has ${getlist[i].this.tution}`
   
                    
         }
          {
            allstudent=[];
         }
         
     }
     
 }

 
let zaid= new Student ('zaied@gmail.com','0798626356' ,'100jd');
zaid.updateAge;
zaid.render;



const form =document.getElementById ('studentinfo');
form.addEventListener('submit' ,studentCreator);
let newstue;
function studentCreator (event) {
    event.preventDefault()
    let email=event.target.studentEmail.value;
    let mobile=event.target.studentMobileNumber.value;
    let tution=event.target.tution.value;
    newstue=new Student(email,mobile,tution);
    newstue.updateAge();
    newstue.render();
    savestudent();
    footerrender();
    getstudent();
}











