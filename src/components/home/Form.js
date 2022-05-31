import React from 'react'
import useInput from "../../customhook/useInput"

const Form = () => {
  const [title, bindTitle,resetTitle] = useInput()
  const [content, bindContent,resetContent] = useInput()
  const handleSubmit = (e) => {
e.preventDefault();
console.log({title, content})
resetTitle()
resetContent()
  }
  return (
    <div className='section'>
        <form action=''>
            <h5 className='grey-text'>
                New Note
            </h5>
           
    <div className="input-field">
      <input id="note_title" type="text" className="validate" {...bindTitle} />
      <label  for="note_title">Note Title</label>
  </div>
  <div className='input-field'></div>
  <textarea id="note_content" className="materialize-textarea"{...bindContent}></textarea>
          <label for="note_content">Note Content</label>
        </form>
        <button className='btn-green'>Add</button>


    </div>
  )
}

export default Form