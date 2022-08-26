import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CreateNote from '../../Forms/CreateNote';
import Note from './Note/Note';
import "./Note/Note.css"

const Notes = () => {

  const [data, setData] = useState({});
  const [type, setType] = useState("add");
  const [notes, setNotes] = useState([0]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8001/api/notes").then((response) => {
      setNotes(response.data);
    });
  }, [refresh]);

  const deleteItem =(id) =>{
    axios.delete("http://localhost:8001/api/notes/"+id).then((response) => {
      if(response.data.status){
        setRefresh(refresh+1);
        
      }else{
        alert('something went wrong!')
      }
    });
  }


  const saveNote = (obj,id) =>{
    if(type === 'edit'){
      axios.put("http://localhost:8001/api/notes/"+id, {
        title: obj.title,
        description: obj.description
      })
      .then(function (response) {
        console.log(response);
        setType('add')
        setRefresh(refresh+1);
      })
      .catch(function (error) {
        console.log(error);
      });
    }else{
      axios.post("http://localhost:8001/api/notes/", {
        title: obj.title,
        description: obj.description
      })
      .then(function (response) {
        console.log(response);
        setRefresh(refresh+1);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  }

  return (
    <div className='notes'>
    {notes.map((item) => {
        return (
          <Note
            data={item}
            onDelete={() => {
              if (window.confirm("Delete the item?")) {
                deleteItem(item._id);
              }
            }}
            onEdit={() => {
              setType("edit");
              setData(item);
            }}
          />
        );
      })}
      
      <CreateNote 
        type={type}
        data={data}
        onSubmit={(title,desc)=>{
            saveNote(
                {
                    title:title,
                    description:desc
                },
                data?._id ? data._id :null
            )
        }}
      />
    </div>
  )
}

export default Notes
