import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import { TaskItemObj } from "../type";

//
export interface TaskItemProps {
    droppableId: string;
    item: TaskItemObj;
    ix: number;
}

//
function TaskItem({ droppableId, item, ix }: TaskItemProps) {
    //
    return (
        <Draggable draggableId={`${droppableId}_${item.id}`} index={ix}>
            {(provided, snapshot) => (
                <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                        ...provided.draggableProps.style,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: snapshot.isDragging ? "green" : "",
                            color: snapshot.isDragging ? "white" : "",
                        }}
                    >
                        {item.title}
                    </div>
                </li>
            )}
        </Draggable>
    );
}

export default TaskItem;
