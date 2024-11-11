let nameElement = document.getElementById('name');
let ageElement = document.getElementById('age');
let placeElement = document.getElementById('place');
let data = JSON.parse(localStorage.getItem('data')) || []
function addToData(){
    if (!nameElement.value || !ageElement.value ||!placeElement.value){
        alert('Please fill the entire form');
        return;
    }else{
        let item = {name:nameElement.value,age:ageElement.value,place:placeElement.value}
        data.push(item)
        nameElement.value = ''
        ageElement.value =''
        placeElement.value = ''
        localStorage.setItem('data',JSON.stringify(data));
        renderData()
    }
}
function renderData(){
    let resultElement = document.getElementById('result');
    document.getElementById('result').innerHTML = ''
    if (data.length === 0){
        resultElement.innerHTML = '<tr><td colspan="6" id="emt-list">Your List is Empty</td></tr>'
    }
    data.forEach((element,i) => {
        resultElement.innerHTML += `<tr id='list-item'>
                <td>${i+1}</td>
                <td>${element.name}</td>
                <td>${element.age}</td>
                <td>${element.place}</td>
                <td><button id='edit-btn' onclick='updateData(${i})'><ion-icon name="create-outline"></ion-icon></button></td>
                <td><button id='delete-btn' onclick='deleteData(${i})'><ion-icon name="trash-outline"></ion-icon></button></td>
        </tr>`
        
    });

}
function updateData(i){
    if (confirm("Want to Update the Data")){
        return;
    }
}

function deleteData(i){
    if (confirm('Do You Sure to Delete This..')){
        data.splice(i,1)
        localStorage.setItem('data',JSON.stringify(data));
        renderData()
    }
    
}
renderData()