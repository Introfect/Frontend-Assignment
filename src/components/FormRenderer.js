import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectJson } from '../slices/jsonSlice';

const FormRenderer = () => {
  const [jsonOutput, setJsonOutput] = useState([]);

  const items = useSelector(selectJson);
  useEffect(() => {
    handleConvertToJSON();
  }, [items]);
  function handleConvertToJSON() {
    try {
      const parsedJson = JSON.parse(items);
      setJsonOutput(parsedJson);
      console.log(jsonOutput)
    } catch (error) {
      console.error('Error parsing JSON:', error);
      setJsonOutput(null);
    }
  }
  const handleSubmit=(e)=> {
    e.preventDefault()
    console.log("submit")
  }

  // console.log(schema)
  // const onSubmit = (data) => {
  //   console.log(data.formData);
  // };

  return (
    <div>
      {
    jsonOutput? jsonOutput.map((item) => {
      return(
      <div key={item.sort}>
        <label htmlFor={item.label}>{item.label}</label>
        {console.log(item.uiType)}
        <input
        value={item.defaultValue}
        type={item.uiType}
        />   </div>
      )
    }):<h1>Please enter your json in the given fields</h1>}
      <button onClick={(e)=>handleSubmit()}type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
};

export default FormRenderer;
