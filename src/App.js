import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Users from "./Components/Users/Users";
import Groups from "./Components/Groups/Groups";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserForm from "./Components/Form/UserForm";
import GroupForm from "./Components/Form/GroupForm";
import UserEditForm from "./Components/Form/EditForms/UserEditForm";
import GroupEditForm from "./Components/Form/EditForms/GroupEditForm";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header/>
            <Main/>
            <Routes>
                <Route path="/users" element={<Users/>}></Route>
                <Route path="/groups" element={<Groups/>}></Route>
                <Route path="/addUser" element={<UserForm/>}></Route>
                <Route path="/addGroup" element={<GroupForm/>}></Route>
                <Route path="/editUser/:id" element={<UserEditForm/>}></Route>
                <Route path="/editGroup/:id" element={<GroupEditForm/>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
