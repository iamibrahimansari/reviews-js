'use script'

import emps from '../data/employees.js';
console.log(emps);
const btns = document.querySelectorAll('.btns__btn');
const image = document.getElementById('img');
const empName = document.getElementById('name');
const empProfession = document.getElementById('profession');
const desc = document.getElementById('desc');
const surpriseBtn = document.getElementById('btn');

let index = 0;
const lIndex = emps.length - 1;
let previousEmp = emps[0];

const helperFunction = emp =>{
    const {
        img: {
            url, 
            width, 
            height
        }, 
        name, 
        profession, 
        detail
    } = emp;
    image.src = url;
    image.width = width;
    image.height = height;
    empName.textContent = name;
    empProfession.textContent = profession;
    desc.textContent = detail;
}

const handleSurpriseBtn = emp =>{
    helperFunction(emp);
}

const handleLeftRightBtns = emp =>{
    btns[1].style.display = emp === emps[lIndex] ? 'none' : 'flex';
    btns[0].style.display = index > 0 ? 'flex' : 'none';
    helperFunction(emp);
} 

btns.forEach(btn =>{
    btn.addEventListener('click', event =>{
        if(btn.className.includes('left-btn')){
            handleLeftRightBtns(emps[--index]);
        }else{
            handleLeftRightBtns(emps[++index]);
        }
    })
})

btn.addEventListener('click', event =>{
    let emp = emps[parseInt(Math.random() * emps.length)];
    while(emp === previousEmp){
        emp = emps[parseInt(Math.random() * emps.length)];
    }
    previousEmp = emp;
    handleSurpriseBtn(emp);
})