import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
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
  return (
    <div className='h-screen w-screen bg-slate-950 text-white'>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
