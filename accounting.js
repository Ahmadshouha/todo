'use strict';

let employeeForm = document.getElementById('employeeForm');
let employeeSection = document.getElementById('data');
let allEmployees = [];
checkLocalAndPush();

function Employee(name, department, level, image) {
    this.name = name;
    this.department = department;
    this.imagePath = `./images/user.png`;
    this.level = level;

}

Employee.prototype.setID = function () {
    this.id =  Math.floor(1000 + Math.random() * 9000);
}
Employee.prototype.setSalary=function(){

  if(this.level=="Senior"){
    this.salary = 7*( Math.floor(Math.random() * (2000 - 1500) ) + 1500);
  }
  if(this.level=="Mid-Senior"){
    this.salary = 7*(  Math.floor(Math.random() * (1500 - 1000) ) + 1000);
  }if(this.level=="Junior"){
    this.salary = 7*(  Math.floor(Math.random() * (1000 - 500) ) + 500);
  }
  }

function render(employeesFromLS) {
     employeeSection.innerHTML = '';
   // for (let i = 0; i < employeesFromLS.length; i++) {
    //    let drink = drinksFromLS[i];
let empObj = employeesFromLS[employeesFromLS.length-1];
        let div = document.createElement('div');
        employeeSection.appendChild(div);

        let img = document.createElement('img');
        div.appendChild(img);
        img.setAttribute('src', empObj.imagePath);
        img.setAttribute('alt', empObj.name);

    let newLine = document.createElement('br');
        let h4 = document.createElement('h4');
        div.appendChild(h4);
        h4.setAttribute('style', 'white-space: pre;');
        // h4.textContent = drink.name;
        h4.textContent ="Name: "+ empObj.name

                        +" - ID: "+empObj.id
                         +"\r\n"
                        +"Department: "+empObj.department
                         +"\r\n"
                         +"Level:"+ empObj.level
                         +"\r\n"
                        +""+ empObj.salary;





  //  }

}



function handelSubmit(event) {
    event.preventDefault();
    let nameVal = event.target.name.value;
    let departmentVal = event.target.department.value;
    let levelVal = event.target.level.value;
    let imageVal = event.target.image.value;


    let newEmployee = new Employee(nameVal, departmentVal, levelVal, imageVal);
    newEmployee.setID();
    newEmployee.setSalary();
    allEmployees.push(newEmployee);

    let jsonArr = toJSON();

    saveToLocalS(jsonArr);

    render(readFromLocalS());
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkLocalAndPush() {
    if (allEmployees.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            allEmployees = arr;
        }
    }
}



function readFromLocalS() {
    let jsonArr = localStorage.getItem('employees');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
}

function toJSON() {
    let jsonArray = JSON.stringify(allEmployees);
    return jsonArray;
}


function saveToLocalS(jsonArray) {
    localStorage.setItem('employees', jsonArray)
}

//render(readFromLocalS());


employeeForm.addEventListener('submit', handelSubmit);