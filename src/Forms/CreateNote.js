import React, { useEffect, useState } from "react";

const CreateNote = ({onSubmit,type,data}) => {

  const [title, setTitle] = useState(type === "edit" ? data.title : "");
  const [desc, setDesc] = useState(type === "edit" ? data.description : "");

  useEffect(() => {
    if (type === "edit") {
      setTitle(data?.title);
      setDesc(data?.description);
    }
  }, [type]);

  const clearForm = () => {
    setTitle("");
    setDesc("");
  };

  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <input
        value={title}
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        cols="10"
        rows="5"
        value={desc}
        placeholder="Type...."
        maxLength="100"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      ></textarea>
      <div className="note__footer">
        <button className="note__save" onClick={clearForm}>
          clear
        </button>
        <button
          className="note__save"
          onClick={() => {
            onSubmit(title, desc);
            clearForm();
          }}
        >
          {type === "edit" ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
