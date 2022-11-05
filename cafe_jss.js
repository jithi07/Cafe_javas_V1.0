

// reservation java

var button = document.querySelector(".btn");
var body = document.querySelector(".reserv");
var icon = document.querySelector('.icon');
var clock = document.querySelector('.clock');
var texts = document.querySelector('.text');

  button.addEventListener('click',()=> {
    body.classList.add("active");
    button.classList.add("active");
    icon.classList.add("active");
    clock.classList.add("active");
    texts.classList.add("active");
    
    third();
    first();
    second();
    fourth();
  }
  );

    function  first()
    {
      texts.classList.remove('active');
      texts.innerText="Reservation Confirmed";
      texts.style('padding-left', '0');
    }
     function second() {
      icon.classList.add('fade-top');
    }
    function  third() {
      document.querySelector('#tick polyline').classList.add('active');
    }
    function fourth() 
    {
      body.classList.remove('active').classList.add('green-bg');
    }

function onsubmit()
{
  let textreserv = document.getElementById('textreserv').value
  let x = document.forms["myForm"]["visitor_name"].value;
  if (x == "") 
  {
   window.alert("Name must be filled out");
    return false;
  }

}
const name = document.getElementById('name').value
const num = document.getElementById('phone').value




// --------------------------------------contact us -------------------------------------------



function displayAlert() {
  alert('Fill all the required fields');
  
  }
 
// const targetDivfirstname = document.getElementById("fname");
// const targetDivsecondname = document.getElementById("lname");
// const targetDisplayvalidation= document.getElementById("name_validation")
// const targetDivemail = document.getElementById("email_validation")

// const contactBtn = document.getElementById("submit");
//  contactBtn.onclick = function () {
//       if (targetDivfirstname.style.display === "none" && targetDivsecondname.style.display  === "none") {
//         targetDisplayvalidation.style.display = "none";
//       } else{
//         targetDisplayvalidation.style.display = "block";
//       }
//       if (targetDivemailvalidation.style.display !== "none" ){
//         targetDivemail.style.display = "none";
//       }
//       else{
//         targetDivemail.style.display = "block";
//       }};
   
 function firstnameValidation()
 {
  //  var value = this.value;
    var fn = document.getElementById("fname");
    console.log(fn.value);
    if(fn.value === '3')
    {
      fn.style.borderColor = "red";
    }
 }



    //menu 

    let down=document.getElementById("down");
console.log(down)
let up=document.getElementById("up");
console.log(up)
let cont=document.getElementById("menu-container");

cont.style.display="none";
down.addEventListener('click',()=>{
    cont.style.display="block";
});
up.addEventListener('click',()=>{
    cont.style.display="none";
});

// function upfunction(){
//     cont.style.display="none";
//     console.log('hello')
    // if( cont.style.display==="block"){
    //     cont.style.display="none"
    // }
    //else{
    //     cont.style.display=="none"
    // }
// }

// function downfunction(){
//     console.log('hi')
//     cont.style.display="block";
//     console.log(cont.style.display)
    // if( cont.style.display==="none"){
    //     cont.style.display="block"
    // }else{
    //     cont.style.display="block"
    // }
// }



      