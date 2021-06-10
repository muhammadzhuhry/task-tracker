import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
  console.log(task)
  return (
    <div className='task'>
      <h3 id={task.id}>
        {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task