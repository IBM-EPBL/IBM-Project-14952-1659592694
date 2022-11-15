import React, { useState } from "react";

const Form = () => {
  const initialinput = {
    age: null,
    hypertension: "",
    bloodpressure: null,
    urinaryGravity: null,
    albumin: null,
    sugar: null,
    rbc: null,
    protein: null,
    pheochromo: null,
    bacteria: null,
    glucode: null,
    urea: null,
    serum: null,
    haemoglobin: null,
    wbc: null,
    rbccount: null,
    diabeteus: null,
    artery: "",
    appet: "",
    pedal: "",
    anemia: "",
    potassium:null,
    sodium:null,
  };
  const [data, setData] = useState(initialinput);
  const handleChange = (e) => {
    console.log("nithiesh",data,e.target.value);

    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit=(e)=>{
    console.log("nithiesh",data);
    e.preventDefault();
  }
  return (
    <div style={{backgroundColor:'lightgray',padding:'0px',margin:'0px'}}>
      <form onSubmit={handleSubmit} className="signup__form">
        <label htmlFor="age">Age:</label>
        <input
          className="input-field"
          type="number"
          name="age"
          onChange={handleChange}
          required
          value={data.age}
          placeholder="Please enter the age"
        />
        <br />
        <label htmlFor="bloodpressure">Blood Pressure:</label>
        <input
          className="input-field"
          type="number"
          name="bloodpressure"
          onChange={handleChange}
          required
          value={data.bloodpressure}
          placeholder="Please enter the bloodpressure"
        />
        <br />
        <label htmlFor="urinaryGravity">Urinary Gravity:</label>
        <input
          className="input-field"
          type="number"
          name="urinaryGravity"
          onChange={handleChange}
          required
          value={data.urinaryGravity}
          placeholder="Please enter the Urinary Gravity"
        />
        <br />
        <label htmlFor="albumin">Albumin:</label>
        <input
          className="input-field"
          type="number"
          name="albumin"
          onChange={handleChange}
          required
          value={data.albumin}
          placeholder="Please enter the albumin"
        />
        <br />
        <label htmlFor="sugar">Sugar Level:</label>
        <input
          className="input-field"
          type="number"
          name="sugar"
          onChange={handleChange}
          required
          value={data.sugar}
          placeholder="enter sugar "
        />
        <br />
        <div>
            <span>
                Red Blood Cells:
            </span>
            <label htmlFor="rbc">Normal</label>
        <input
          className="radio"
          type="radio"
          name="rbc"
          onClick={handleChange}
          required
          value="Normal"
        />
        &nbsp;
        <label htmlFor="rbc">Abnormal</label>
        <input
          className="radio"
          type="radio"
          name="rbc"
          onClick={handleChange}
          required
          value="Abnormal"
        />
        </div>
        <br />
        <label htmlFor="protein">Protein level:</label>
        <input
          className="input-field"
          type="number"
          name="protein"
          onChange={handleChange}
          required
          value={data.protein}
          placeholder="Please enter the protein level"
        />
        <br />
       <div>
       <span>Pheochromocytoma:</span>
       <br/>
        <label htmlFor="pheochromo">Normal</label>
        <input
          className="radio"
          type="radio"
          name="pheochromo"
          onClick={handleChange}
          required
          value="Normal"
        />
        <label htmlFor="pheochromo">Abnormal</label>
        <input
          className="radio"
          type="radio"
          name="pheochromo"
          onChange={handleChange}
          required
          value="Abnormal"
        />
       </div>
        <br />
        <label htmlFor="serum">Serum Creatinine:</label>
        <input
          className="input-field"
          type="number"
          name="serum"
          onChange={handleChange}
          required
          value={data.serum}
          placeholder="Please enter the Serum Creatinine"
        />
        <br />
        <label htmlFor="sodium">Sodium:</label>
        <input
          className="input-field"
          type="number"
          name="sodium"
          onChange={handleChange}
          required
          value={data.sodium}
          placeholder="Please enter the Sodiunm"
        />
        <br />
        <label htmlFor="potasium">Potassium:</label>
        <input
          className="input-field"
          type="number"
          name="potassium"
          onChange={handleChange}
          required
          value={data.potassium}
          placeholder="Please enter the Potassium"
        />
        <br />
        <label htmlFor="haemoglobin">Haemoglobin:</label>
        <input
          className="input-field"
          type="number"
          name="haemoglobin"
          onChange={handleChange}
          required
          value={data.haemoglobin}
          placeholder="Please enter the Haemoglobin"
        />
        <br />
        <label htmlFor="wbc">White blood Cells:</label>
        <input
          className="input-field"
          type="number"
          name="wbc"
          onChange={handleChange}
          required
          value={data.wbc}
          placeholder="Please enter the White Blood Cells(wc)"
        />
        <br />
        <label htmlFor="rbccount">Red blood cell count(rc):</label>
        <input
          className="input-field"
          type="number"
          name="rbccount"
          onChange={handleChange}
          required
          value={data.rbccount}
          placeholder="Please enter the Red blood cell count(rc)"
        />
        <br />
        <label htmlFor="hypertension">Hypertension:</label>
        <input
          className="input-field"
          type="text"
          name="hypertension"
          onChange={handleChange}
          required
          value={data.hypertension}
          placeholder="Please enter the Hypertension result"
        />
        <br />
        <label htmlFor="bloodpressure">Diabetes Mellitus(dm):</label>
        <input
          className="input-field"
          type="text"
          name="diabetes"
          onChange={handleChange}
          required
          value={data.diabeteus}
          placeholder="Please enter the Diabetes Mellitus(dm)"
        />
        <br />
        <label htmlFor="arterty">Coronary Artery Disease(cad):</label>
        <input
          className="input-field"
          type="text"
          name="artery"
          onChange={handleChange}
          required
          value={data.artery}
          placeholder="Please enter the Coronary Artery Disease(cad) result"
        />
        <br />
        <label htmlFor="appet">Appetite(appet):</label>
        <input
          className="input-field"
          type="text"
          name="appet"
          onChange={handleChange}
          required
          value={data.appet}
          placeholder="Please enter the Appetite(appet) result"
        />
        <br />
        <label htmlFor="pedal">Pedal Edema(pe):</label>
        <input
          className="input-field"
          type="text"
          name="pedal"
          onChange={handleChange}
          required
          value={data.pedal}
          placeholder="Please enter the pedal Edema result"
        />
        <br />
        <label htmlFor="anemia">Anemia:</label>
        <input
          className="input-field"
          type="text"
          name="anemia"
          onChange={handleChange}
          required
          value={data.anemia}
          placeholder="Please enter the Anemia result"
        />
        <br />
        <input type="submit" className="submit-button" value="Submit" />
        <br/>
        <input type="reset" className="submit-button" value="Reset" />

      </form>
    </div>
  );
};
export default Form;
