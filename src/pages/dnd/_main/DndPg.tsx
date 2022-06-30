import * as React from "react";
import {
    DragDropContext,
    DropResult,
    ResponderProvided,
} from "react-beautiful-dnd";
import TaskList from "../list/TaskList";

import { TaskItemObj } from "../type";

import "./DndPg.scss";

//
export interface DndPgProps {}

//
const initial_tasks1: TaskItemObj[] = [
    {
        id: 1,
        title: "Tasks1: Title 1",
    },
    {
        id: 2,
        title: "Tasks1: Title 2",
    },
    {
        id: 3,
        title: "Tasks1: Title 3",
    },
    {
        id: 4,
        title: "Tasks1: Title 4",
    },
];

const initial_tasks2: TaskItemObj[] = [
    {
        id: 5,
        title: "Tasks2: Title 1",
    },
];

const initial_tasks = [
    { id: "tasks1", arr: initial_tasks1 },
    { id: "tasks2", arr: initial_tasks2 },
];
//
function DndPg({}: DndPgProps) {
    const [tasks_arr, setTasksArr] = React.useState(initial_tasks);

    //
    const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
        if (!result.destination) return;

        const source_tasks_ix = tasks_arr.findIndex(
            (item) => item.id === result.source.droppableId
        );
        const destination_tasks_ix = tasks_arr.findIndex(
            (item) => item.id === result.destination.droppableId
        );
        const source_ix = result.source.index;
        const destination_ix = result.destination.index;

        if (
            source_tasks_ix === destination_tasks_ix &&
            source_ix === destination_ix
        ) {
            return;
        }

        setTasksArr((tasks_arr) => {
            const new_tasks_arr = [...tasks_arr];
            const item = new_tasks_arr[source_tasks_ix].arr.splice(
                source_ix,
                1
            )[0];
            new_tasks_arr[destination_tasks_ix].arr.splice(
                destination_ix,
                0,
                item
            );

            return new_tasks_arr;
        });
    };

    //
    return (
        <div className="DndPg">
            <DragDropContext onDragEnd={handleDragEnd}>
                <div className="DndPg_row">
                    {tasks_arr.map((tasks) => (
                        <div key={tasks.id} className="DndPg_col">
                            <TaskList
                                tasks={tasks.arr}
                                droppableId={tasks.id}
                            />
                        </div>
                    ))}
                </div>
            </DragDropContext>
        </div>
    );
}

export default DndPg;
