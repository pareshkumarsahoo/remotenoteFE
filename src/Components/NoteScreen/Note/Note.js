import React from "react";
import './Note.css'
import Icon from "react-crud-icons";

const Note = ({data,onDelete,onEdit}) => {
  return (
    <div className="note">
      <div className="note__body"></div>
      <h3 style={{textTransform:'uppercase'}}>{data.title}</h3>
      <p>{data.description}</p>
      <div className="note__footer" style={{ justifyContent: "space-between" }}>
      <p>{new Date(data.updatedAt).toDateString()}</p>
      <Icon
        name = "edit"
        tooltip = "edit"
        size = "small"
        onClick = {onEdit}
      />
      
      <Icon
        name = "delete"
        tooltip = "delete"
        size = "small"
        onClick = {onDelete}
      />
        </div>
    </div>
  )
}

export default Note
