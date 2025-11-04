import { ChevronRightIcon } from "lucide-react";

function Tasks(props){
    return(
        <div className="flex flex-col items-center p-6 rounded-md shadow">
            <ul className="">
                {props.tasks.map((item) => 
                    <li className="flex gap-2 space-y-2" key={item.title}>
                        <button onClick={ () => props.onTaskClick(item.id)} 
                            className={`w-64 h-10 text-white p-2 rounded-md text-left ${item.isCompleted ? 'bg-green-700' : 'bg-slate-800'}`}>
                            {item.title}
                        </button >
                        <button className={`w-10 h-10 flex items-center justify-center rounded-md ${item.isCompleted ? 'bg-green-700' : 'bg-slate-800'}`}> 
                            <ChevronRightIcon />
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Tasks;