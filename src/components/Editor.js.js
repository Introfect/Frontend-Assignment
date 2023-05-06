import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToJson } from '../slices/jsonSlice';

const Editor = () => {
  const dispatch = useDispatch();
  const [schema, setSchema] = useState({});
  const [jsonOutput, setJsonOutput] = useState({});

  const handleOnChange = (e) => {
    setSchema(e.target.value);
    
  };
  function handleConvertToJSON() {
    try {
      // const parsedJson = JSON.parse(schema);
      // setJsonOutput(parsedJson);
      dispatch(addToJson(schema));
    } catch (error) {
      console.error('Error parsing JSON:', error);
      setJsonOutput(null);
    }
  }

 
  return (
    <div> 
      
    <div>
      <textarea
      className='w-full h-96 p-4 border-blue-500 border-4 rounded-lg '
      onChange={handleOnChange}
      />
      <button className='bg-blue-500 p-4 text-center m-4 rounded-md' onClick={handleConvertToJSON}>Convert to JSON</button>
    </div>
    </div>
  );
};

export default Editor;