type Props = {
id : number;
title: string; 
task: string[]; 
onDelete: (taskId: number, index: number) => void;
};

const Task = ({ id, title, task, onDelete }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {task.map((currtask, index) => {
          return (
            <li key={`${currtask} ${index}`}>
              {currtask}
              <span>
                <button onClick={() => onDelete(id, index)}> X
                </button>{" "}
              </span>
            </li>
          );})}
      </ul>
    </div>
);};

export default Task;

