// src/components/Tasks.jsx
import { ChevronRightIcon, DeleteIcon } from "lucide-react";

function Tasks(props){
    return(
        <div className="flex flex-col items-center p-6 rounded-md shadow">
            <ul className="">
                {props.tasks.map((item) => 
                    <li className="flex gap-2 space-y-2" key={item.title}>
                        <button onClick={ () => props.toogleCompleted(item.id)} 
                            className={`w-64 h-10 text-white p-2 rounded-md text-left cusor-pointer
                            ${item.isCompleted ? 'bg-green-700' : 'bg-slate-800'}`}>
                            {item.title}
                        </button >
                        <button className={`w-10 h-10 flex items-center justify-center cursor-pointer
                            rounded-md ${item.isCompleted ? 'bg-green-700' : 'bg-slate-800'}`}> 
                            <ChevronRightIcon />
                        </button>
                        <button onClick={ () => props.onDeleteTask(item.id)} className={`w-10 h-10 flex items-center justify-center 
                            rounded-md bg-red-400 hover:bg-red-600 transition-all cursor-pointer`}> 
                            <DeleteIcon />
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Tasks;