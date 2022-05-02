import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddButton from "../../UI/Buttons/AddButton";
import classes from "./Users.module.css";
import {fetchGroups, fetchUsers} from "../../actions/ListsActions";

const Users = () => {
    let dispatch = useDispatch()
    const userList = useSelector(state => state.userList)
    const {users, loading, error} = userList

    const groupList = useSelector(state => state.groupList)
    const {groups} = groupList

    useEffect(()=> {
            dispatch(fetchUsers())
            dispatch(fetchGroups())
        }, [dispatch])

    const deleteUser = async (id) => {
         await fetch(`http://127.0.0.1:8000/api/users/delete-user/${id}/`,
            {method: 'DELETE'})
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.success) {
                   console.log("Success: ", data.success)
                }
            })
    }

    return (
        <div>
            <AddButton to="/addUser" type={"add"} text={"Add user"}/>
            <table className={classes.table}>
              <tr className={classes.border}>
                <th>Username</th>
                <th>Created</th>
                <th>Group</th>
                <th>Actions</th>
              </tr>
                {users.map(user=>(
                    <tr className={classes.border} key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.created}</td>
                        <td>{user.group}</td>
                        <td>
                            <AddButton to={`/editUser/${user.id}`} type={"edit"} text={"Edit user"}/>
                            <button className={classes.deleteButton} onClick={()=>deleteUser(user.id)}>Delete user</button>
                        </td>
                    </tr>))}
            </table>
        </div>
    );
};

export default Users;