

// var submit = document.getElementById('submit');
// // var form = document.getElementById("form");


// submit.addEventListener('click' , () => {
//     let age = document.querySelector('#age').value
//     switch (true) {
//         case (age < 18):
//             document.querySelector('.atext').innerText = ('too young')
//             break
            
//         case (age < 30):
//                 document.querySelector('.atext').innerText = ('Correct age')
//             break
//         case (age < 65):
//                 document.querySelector('.atext').innerText = ('Too old')
//         break
//     };


//     let height = document.querySelector('#height').value
//     switch (true) {
//         case (height < 100):
//             document.querySelector('#aheight').innerText = ('too young')
//             break
            
//         case (height < 150):
//                 document.querySelector('#aheight').innerText = ('Correct height')
//             break
//         case (height < 200):
//                 document.querySelector('#aheight').innerText = ('Too old')
//         break
//     };


//     let weight = document.querySelector("#weight");
//     switch (true) {
//         case (weight < 100):
//             document.querySelector('#aweight').innerText = ('too young')
//             break
            
//         case (weight < 150):
//                 document.querySelector('#aweight').innerText = ('Correct height')
//             break
//         case (weight < 200):
//                 document.querySelector('#aweight').innerText = ('Too old')
//         break
//     };
// })



var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/((height/100)*2); 
    result.innerText = BMI.toFixed(2);

    if(BMI < 18.5){
        statement.innerText = "Your BMI falls within the underweight range";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Your BMI falls within the normal or healthy weight range";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Your BMI falls within the overweight range";
    }else{
        statement.innerText = "Your BMI falls within the obese range";
    }
});



