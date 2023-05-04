
import React, { useEffect } from 'react'
import Editor from "./Editor.js";
import FormRender from "./FormRenderer.js";

const Home = () => {
  return (
    <div className="flex">
    <div className="w-1/2 p-4">
      <Editor/>
    </div>
    <div className="w-1/2 p-4">
      <FormRender/>
    </div>
  </div>
  )
}

export default Home