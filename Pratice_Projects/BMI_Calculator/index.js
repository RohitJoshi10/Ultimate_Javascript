let height = document.querySelector("#height");
let weight  = document.querySelector("#weight");
let result = document.querySelector("#result");


let calculateBMI = ()=>{
   let heightValue = height.value;
   let weightValue = weight.value;

   let heightInMeter = (heightValue/100) * (heightValue/100);
   heightInMeter = heightInMeter.toFixed(2)

   let BMI = weightValue/heightInMeter;
   BMI = BMI.toFixed(2);

   console.log("Height:",heightValue);
   console.log("Weight",weightValue);
   console.log("Height in m:",heightInMeter);
   console.log("BMI:", BMI);
   result.innerHTML = "Your BMI is:"+BMI;

}

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    calculateBMI();
})