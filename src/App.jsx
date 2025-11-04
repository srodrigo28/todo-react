import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  /** Carrega todas as tarefas */
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: 'Estudar React', 
      description: 'Estudar React', 
      isCompleted: false 
    },
    { 
      id: 2, 
      title: 'Estudar Next.js', 
      description: 'Estudar React', 
      isCompleted: true 
    },
    { 
      id: 3, 
      title: 'Estudar TypeScript', 
      description: 'Estudar React', 
      isCompleted: true 
    },
  ]);

  /** Muda Status uma tarefa */
  function onTaskClick(taskId){
    const newTask = tasks.map(task => {
      if(task.id === taskId){
        return { ...task,
          isCompleted: !task.isCompleted
        }
      }
      // não modifica a tarefa
      return task;
    })
    setTasks(newTask);
  }

  return (
    <div className='h-screen w-screen bg-slate-950 text-white' >
      
      <div className='flex justify-center items-center w-xl mx-auto pt-10'>
        <h1 className='text-xl text-center p-2'>Gerenciador de Tarefas</h1>
        <AddTask  />
      </div>

      <Tasks tasks={tasks} onTaskClick={onTaskClick} />
    </div>
  )
}

export default App
