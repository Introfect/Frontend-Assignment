import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectJson } from '../slices/jsonSlice';

const FormRenderer = () => {
  const [jsonOutput, setJsonOutput] = useState([]);

  const [formData, setFormData] = useState({
    Sauce:"Red",
    Topping_type:'Veg',
    Cheese:"Cheddar",
    Portion:"Medium"

  });

  const handleInputChange = (event) => {
    const { name, value, type,  } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? [...prevFormData[name], value] : type === 'radio' ? value : value.trim(),
    }));
  };



  const [selectedOption, setSelectedOption] = useState('option1');




  const items = useSelector(selectJson);
  useEffect(() => {
    handleConvertToJSON();
  }, [items]);
  function handleConvertToJSON() {
    try {
      const parsedJson = JSON.parse(items);
      setJsonOutput(parsedJson);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      setJsonOutput(null);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!jsonOutput){
      alert('Please enter your Pasta json in the given fields')
    }
    else{

      console.log(formData);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
      {
        jsonOutput ? jsonOutput.map((item) => {
          return (
            <div className=''key={item.sort}>
              <div className='flex flex-cols mx-2 justify-between'>
              <label
              className='font-semibold text-lg  m-4' htmlFor={item.label}>{item.label}</label>
              {item.uiType==="Input" ? <input
               onChange={handleInputChange}
              className='p-2 w-3/4  border-2 border-gray-400 rounded-lg'
                value={item.defaultValue}
                type={item.uiType.toLowerCase()}
                name={item.label}
                placeholder='Enter your Pasta name'
                />: null}</div> 
                {item.uiType==="Radio" ? item.validate.options.map((sub) => {
                  return (
                    <div className="radio" key={sub.sort}>
                      <label>
                        <input
                         onChange={handleInputChange}
                          type="radio"
                          name={item.label}
                          value={sub.label}
                          checked={selectedOption === sub.label}
                          className="form-check-input"
                        />
                        {sub.label}
                      </label>
                    </div>
                  )
                }) : null}
              {item.uiType === "Group" ? item.subParameters.map((sub) => {
                return (
                  
                  <div className='flex space-y-2 justify-between p-2 m-4 ' key={sub.sort}>
                    <label className='m-4 text-lg' htmlFor={sub.label}>Select a {sub.label}</label>
                    {sub.uiType === "Select" ?
                      <select 
                      onChange={handleInputChange}
                      className='p-1 w-40' name={sub.label} defaultValue='Red' id={sub.label}>
                        {sub.validate.options.map((subsub) => {
                          return (
                            <option
                            
                              value={subsub.label}
                            >{subsub.label}</option>
                          )
                        })}
                      </select> : null}


                    
            </div>
          )
        }) : null}


{item.uiType === "Select" ?
                  <div className='flex space-y-2 justify-between p-2 m-4 ' key={item.sort}>
                    <label className='m-4 text-lg' htmlFor={item.label}>Select a {item.label}</label>
                    {item.uiType === "Select" ?
                      <select className='p-1 w-40'  onChange={handleInputChange} name={item.label} id={item.label}>
                        {item.validate.options.map((subsub) => {
                          return (
                            <option
                           
                              value={subsub.label}
                            >{subsub.label}</option>
                          )
                        })}
                      </select> : null}


                    
            </div>
          
         : null}

      {/* <input
        value={item.defaultValue}

        type={item.uiType.toLowerCase()}
        name={item.label}

      /> */}

    </div>
  )
}):<h1>Please enter your json in the given fields</h1>}
<button type='submit'className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Submit
</button>
</form>
    </div >
   
  );
};


export default FormRenderer;
