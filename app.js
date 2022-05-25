

import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

// get Elements
const staff_add_form = document.getElementById('staff_add_form');
const Staff_data_list = document.getElementById('Staff_data_list');
// Staff form submit for data add
staff_add_form.addEventListener('submit', function(e){
    e.preventDefault();
    const msg = document.querySelector('.msg');
    let form_data = new FormData(e.target);

    let data = Object.fromEntries(form_data.entries());
    
    let { name,call,photo,location } = data;
    if (name == '' || call == '' || location == '') {
        msg.innerHTML = Alert.warning(`All Fiels Are Required !`);
    } else {
     Storage.set('staff',data); 

     staff_add_form.reset();
     getAllStaff();
    }

});



getAllStaff();
function getAllStaff(){
  let data =  Storage.get('staff');
  let list = '';
  data.map((data,index) =>{
   let {name,call,location,photo } = data;
    list += `
    <tr>
    <td>${index + 1}</td>
    <td>${ name }</td>
    <td>${ call }</td>
    <td>${ location }</td>
     <td><img style = "width:50px; height:50px;object-fit:cover;" src=" ${ photo ? photo : 'asset/img/avatar.png' } " alt=""></td>
     <td>
       <button class="btn btn-primary btn-sm"><i class="fa fa-eye"></i></button>
       <button class="btn btn-warning btn-sm"><i class="fa fa-edit"></i></button>
       <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
     </td>
    </tr>
    `

  })
  Staff_data_list.innerHTML = list;

}