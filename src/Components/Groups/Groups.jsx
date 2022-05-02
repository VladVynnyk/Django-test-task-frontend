import React, {useEffect} from 'react';
import AddButton from "../../UI/Buttons/AddButton";
import classes from "./Groups.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchGroups} from "../../actions/ListsActions";

const Groups = () => {
    let dispatch = useDispatch()
    const groupList = useSelector(state => state.groupList)
    const {groups, loading, error} = groupList

    const userList = useSelector(state => state.userList)
    const {users} = userList
    useEffect(()=> {
            dispatch(fetchGroups())
        }, [dispatch])

    const deleteGroup = async (id) => {
         await fetch(`http://127.0.0.1:8000/api/groups/delete-group/${id}/`,
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
            <AddButton to="/addGroup" type={"add"} text={"Add group"}/>
            <table className={classes.table}>
              <tr className={classes.border}>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
                {groups.map(group =>(
                    <tr className={classes.border} key={group.id}>
                        <td>{group.id}</td>
                        <td>{group.name}</td>
                        <td>{group.description}</td>
                        <td> <AddButton to={`/editGroup/${group.id}`} type={"edit"} text={"Edit group"}/>
                            <button className={classes.deleteButton} onClick={()=>deleteGroup(group.id)}>Delete group</button></td>
                    </tr>))}
            </table>
        </div>
    );
};

export default Groups;