import React, { useState } from "react";
import "./App.css";

function App() {
	const [input, setInput] = useState({});
	const [bmi, setBmi] = useState(0);

	const handleChange = (key, value) => {
		setInput({
			...input,
			[key]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let weight = input.weight;
		let height = input.height;

		height = height * 12;
		height = height * 0.25;

		let meterSquare = height * height;

		let result = Math.round((weight / meterSquare) * 100);
		setBmi(result);
		setInput("");
	};

	return (
		<div className='container'>
			<div className='card  m-40px style =  margin-top : 17%'>
				<div className='card-header text-center'>BMI Calculator</div>
				<div className='card-body'>
					<form className='w-50 m-auto' onSubmit={handleSubmit}>
						<div className='form-group'>
							<label>Weight :</label>
							<input
								type='number'
								id='weight'
								placeholder='Wight in Kg'
								value={input.weight || ""}
								onChange={(e) => handleChange("weight", e.target.value)}
								className='form-control'
							/>
						</div>
						<div className='form-group'>
							<label>Height :</label>
							<input
								type='number'
								id='height'
								placeholder='height in ft'
								value={input.height || ""}
								onChange={(e) => handleChange("height", e.target.value)}
								className='form-control'
							/>
						</div>
						<div className='form-group'>
							<label>BMI Value :</label>
							<textarea
								type='number'
								value={bmi}
								id='BmiValue'
								placeholder='Result'
								className='form-control bmiValueControl'
								readOnly
							/>

							{bmi == 0 && (
								<>
									<div></div>
								</>
							)}
							{bmi < 18.5 && bmi > 0 && (
								<>
									<div style={{ color: "Orange", textShadow: "1px 1px black", fontSize: "24px", fontWeight: "bolder" }}>
										you are under Weight
									</div>
								</>
							)}

							{bmi > 18.5 && bmi < 25 && (
								<>
									<div style={{ color: "rgb(49, 194, 49)", textShadow: "1px 1px black", fontSize: "24px", fontWeight: "bolder" }}>
										you are Healthy
									</div>
								</>
							)}
							{bmi > 25 && (
								<>
									<div style={{ color: "Red", textShadow: "1px 1px black", fontSize: "24px", fontWeight: "bolder" }}>
										you are over Weight
									</div>
								</>
							)}
						</div>
						<div>
							<button className='btn btn-success'>BMI Value</button>
						</div>
					</form>
				</div>
				<div className='card-footer text-center'>
					A Healthy BMI ranges between{" "}
					<span className='spanClas' style={{ color: "yellow" }}>
						19
					</span>{" "}
					to{" "}
					<span className='spanClas' style={{ color: "yellow" }}>
						25
					</span>
				</div>
			</div>
		</div>
	);
}

export default App;
