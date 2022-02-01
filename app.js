// Skill function 

const skill = document.querySelectorAll(".skill")
const listResult = document.querySelector(".listResult")


skill.forEach((skills) => {
    skills.addEventListener("change", function () {
        let allData = document.querySelectorAll(".skill:checked")

        let skill_arrry = [];
        allData.forEach((data) => {
            skill_arrry.push(data.value)
            
        })
        console.log(skill_arrry);
        let listItem = "";
        skill_arrry.map((data) => {
            listItem +=`  <li class="list-group-item">${data}</li>`;
        })
        listResult.innerHTML = listItem;
    })
})

//gender function

const gender = document.querySelectorAll(".gender")
const genderlist = document.querySelector(".genderlist")

gender.forEach((gand)=>{

    gand.addEventListener("change",function () {
        let gando= document.querySelector(".gender:checked").value
        
        genderlist.innerHTML= gando;
        
    })
    
    
})


