import React, {useState} from "react";

function CreateArea(props) {
  
  const [newNote, setNote] = useState({
      title: "",
      content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
        return {
            ...prevNote,
            [name] : value
        }
    })
    }

    function submitNote(e) {
      props.onAdd(newNote)
      e.preventDefault();
      setNote({
        title: "",
        content: ""
      });
    }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={newNote.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={newNote.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
