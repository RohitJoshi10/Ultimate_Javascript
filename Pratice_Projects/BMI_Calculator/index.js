// My code

// let height = document.querySelector("#height");
// let weight  = document.querySelector("#weight");
// let result = document.querySelector("#result");


// let calculateBMI = ()=>{
//    let heightValue = height.value;
//    let weightValue = weight.value;

//    let heightInMeter = (heightValue/100) * (heightValue/100);
//    heightInMeter = heightInMeter.toFixed(2)

//    let BMI = weightValue/heightInMeter;
//    BMI = BMI.toFixed(2);

//    console.log("Height:",heightValue);
//    console.log("Weight",weightValue);
//    console.log("Height in m:",heightInMeter);
//    console.log("BMI:", BMI);
//    result.innerHTML = "Your BMI is:"+BMI;

// }

// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     calculateBMI();
// })


// form jab bhi submit hota hai toh ya toh post type se submit hoga ya fir get type se and then server ko data behj deta hai.
// But here hum server phr data toh behj nhi rhe hai..so, we need to stop this default behaviour of form
// form k ander button banaya tha toh wo by default submit he treat hoga.
// height & weight humne form k ander define kia h because we want ki jab form submit ho tab hum wo value extract kre agr bhara bana dete height and weight 
// toh wo empty value le lega jab hamara form load hoga.

const form = document.querySelector("form");
// this usecase will give you empty value
// const height = parseInt(document.querySelector("height").value)

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value) // Jo value milti hume wo string mai milti so usko parse kr dia int mai.
    const weight = parseInt(document.querySelector("#weight").value) // Jo value milti hume wo string mai milti so usko parse kr dia int mai.
    const result = document.querySelector("#result");

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    } else{
        const bmi = (weight/ ((height*height)/10000)).toFixed(2);
        // show the result
        if(bmi < 18.6){
            result.innerHTML = `<span>${bmi}</span><br><span>Your are Under Weight</span>`;
        } else if(18.6 <= bmi && bmi <= 24.9){
             result.innerHTML = `<span>${bmi}</span><br><span>Your Weight is Noraml</span>`;
        }else{
             result.innerHTML = `<span>${bmi}</span><br><span>Your are Over Weight</span>`;
        }
    }
});
