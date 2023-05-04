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
      className='w-full h-96 p-4 border-blue-50'
      onChange={handleOnChange}
      />
      <button onClick={handleConvertToJSON}>Convert to JSON</button>
    </div>
    </div>
  );
};

export default Editor;