import {React} from "react";
import './App.css'
import Header from "./Components/Header";
import Notes from "./Components/NoteScreen/Notes";
const App = () =>{
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  )
}
export default App;