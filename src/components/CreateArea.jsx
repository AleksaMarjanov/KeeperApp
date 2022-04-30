import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);
  
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

    function expand() {
      setExpanded(true);
    }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input name="title" onChange={handleChange} value={newNote.title} placeholder="Title" />
)}
        <textarea name="content" onClick={expand} onChange={handleChange} value={newNote.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
