import React, { useState } from "react";
import './App.css';

function App() {

  const [input , setInput] = useState({});
  const [bmi , setBmi] = useState("0");

  const handleChange =(key,value)=>{
    setInput({
      ...input,
      [key]:value
    });
  }
  
  const calculation =()=>{
  
      let weight = document.getElementById("weight").value;
      let height = document.getElementById("height").value;
      
      height = height * 12;
      height = height * 0.25;
      
      let meterSquare = height * height;
      
      let result = Math.round(weight / meterSquare * 100);
      document.getElementById("BmiValue").value = result;
      setBmi(result);
      setInput("")
    
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
  }

  return (
    <div class="container">
   <div class="card  m-40px style =  margin-top : 17%">
  <div class="card-header text-center">BMI Calculator</div>
  <div class="card-body">
    <form class ="w-50 m-auto" onSubmit={handleSubmit} >
      <div class ="form-group">
        <label>Weight :</label>
        <input type = "number"
        id ="weight"
         placeholder = "Wight in Kg"
         value={input.weight || ''}
         onChange ={e => handleChange("weight",e.target.value)} 
         class = "form-control"/>
      </div>
      <div class ="form-group">
        <label>Height :</label>
        <input type = "number"
        id ="height"
         placeholder = "height in ft"
         value={input.height || ''}
         onChange ={e => handleChange("height",e.target.value)} 
         class ="form-control"/>
      </div>
      <div class ="form-group">
        <label>BMI Value :</label>
        <textarea type = "number"
         id = "BmiValue"
         onChange ={e => handleChange("BmiValue",e.target.value)}  
         placeholder = "Result"
         class ="form-control bmiValueControl"/>
        
        {bmi == 0 &&<><div>
          </div></>
          }
        {bmi < 18.5 && bmi > 0 &&<><div>
          you are under Weight
          </div></>
          }

          {bmi > 18.5 && bmi < 25 &&<><div>
          you are normal
          </div></>
          }
          {bmi > 25 &&<><div>
          you are over Weight
          </div></>}
      </div>
      <div>
        <button type ="submit" onClick={calculation} class ="btn btn-success">BMI Value</button>
      </div>
    </form>
  </div>
  <div class="card-footer text-center">A Healthy BMI ranges between 19 to 25</div>
</div>
    
    </div>
  );
}

export default App;
