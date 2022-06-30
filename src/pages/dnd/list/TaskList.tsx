import * as React from "react";
import { Droppable } from "react-beautiful-dnd";

import { TaskItemObj } from "../type";

import TaskItem from "../item/TaskItem";

//
export interface TaskListProps {
    tasks: TaskItemObj[];
    droppableId: string;
}

//
function TaskList({ tasks, droppableId }: TaskListProps) {
    //
    return (
        <Droppable droppableId={droppableId}>
            {(provided, snapshot) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                    {tasks.map((item, ix) => (
                        <TaskItem
                            key={item.id}
                            droppableId={droppableId}
                            item={item}
                            ix={ix}
                        />
                    ))}

                    {provided.placeholder}
                </ul>
            )}
        </Droppable>
    );
}

export default TaskList;
