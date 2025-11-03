function Tasks(props){
    console.log(props);
    return(
        <div className="mt-3 flex flex-col items-center">
            <h2 className="flex gap-3 flex-col">{props.tasks.map(
                (item) => 
                    <p className="bg-slate-800 border-l-10 p-2 w-md" key={item.title}>
                        {item.title}
                    </p>
                )}
            </h2>
        </div>
    )
}

export default Tasks;