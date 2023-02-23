import React, {useReducer, useContext, useState, createContext} from 'react';

//initial state
const initialState = { taskList : [] };

// Actions
const ADD = 'ADD';
const DELETE = 'DELETE';
const STATUS = 'STATUS';
const SHOW_COMPLETED = 'SHOW_COMPLETE';
//const SHOW_INCOMPLETED = 'SHOW_INCOMPLETE';
//const SHOW_ALL = 'SHOW_ALL'


//Reducer to Handle Actions
const reducer = (state, action) =>{
    switch (action.type) {
        case ADD:
            return{
                taskList:[
                    ...state.taskList,
                    {
                        id: new Date().valueOf(),
                        label: action.taskItemLabel,
                        completed: false
                    }
                ]
            };
            case DELETE:{
                const deleteTaksItem = state.taskList.filter((taskItem) => taskItem.id !== action.taskItemId);
                return{taskList: deleteTaksItem};
            };
            case STATUS:{
                const updatedTaskList = state.taskList.map((taskItem) => taskItem.id === action.taskItemId ? {...taskItem, completed: !taskItem.completed} : taskItem);
                return{taskList: updatedTaskList};
            };
           /*case SHOW_COMPLETED: {
           };*/
            default:
                return state;
    }
    
};

const TaskListContext = createContext();
export const Provider = ({ children }) => { 

const [state, dispatch] = useReducer(reducer,initialState);

const value = {
    taskList: state.taskList,
    addTaskItem: (taskItemLabel) => {
    dispatch({ type: ADD, taskItemLabel });
    },
    deleteTaskItem: (taskItemId) => {
    dispatch({ type: DELETE, taskItemId });
    },
    markAsCompleted: (taskItemId) => {
    dispatch({ type: STATUS, taskItemId });
    },
    showCompleted: (taskItemId) => {
        dispatch({ type: SHOW_COMPLETED, taskItemId});
    },
   /* showInCompleted: () => {
        dispatch({type: SHOW_INCOMPLETED, })
    },
    showAll: () => {
        dispatch({type: SHOW_ALL, })
    }*/
};

    return (
        <TaskListContext.Provider value={value}>
        {children}
        </TaskListContext.Provider>
    );
}

const Taks = () => {

    const [inputValue, setInputValue] = useState('');
    const {addTaskItem} = useContext(TaskListContext);
    
    const { taskList,  deleteTaskItem, markAsCompleted, showCompleted, /*showInCompleted, showAll*/ } = useContext(TaskListContext);
return (    
    <div>
        <div className="card" style={{width: '50rem'}}>
        <div className="card-body">
            <div className='d-flex justify-content-between mb-4'>
            <h5 className="card-title h1">Task Table</h5>
            <button  className='btn-sm btn btn-light'>All Task</button>
            <button onClick={()=>{showCompleted(taskList.id)}} className='btn-sm btn-light btn'>completed</button>
            <button className='btn-sm btn btn-light'>Pending</button>
            </div>
            <section className="card-text">
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th scope="col">Task</th>
                        <th scope="col">Status</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                {taskList.map((taskItem) =>(
                        <tr key={taskItem.id}>
                        <td>{taskItem.label}</td>
                        <td style={{cursor:'pointer'}} onClick={() => markAsCompleted(taskItem.id)}>{taskItem.completed ? "completed" : "pending"}</td>
                        <td><button onClick={() => deleteTaskItem(taskItem.id)} className='btn btn-danger '>DELETE</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='d-flex justify-content-around mt-5'>
            <p>{taskList.length}</p>
            <input style={{width:'25rem'}} type="text" className="form-control" placeholder="New Taks"  value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button onClick={() =>{ addTaskItem(inputValue); setInputValue('');}} className='btn btn-primary'>Add New Task</button>
            </div>
        </section>
    </div> 
    </div>
    </div>
)
}

export default Taks
