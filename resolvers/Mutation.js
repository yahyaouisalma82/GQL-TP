import { v4 as uuidv4 } from 'uuid';

export const Mutation = {
    // addClassroom: (parent, { addClassroomInput }, { db, pubsub }, info) => {
    //     const newClassroom = { id: uuidv4(), ...addClassroomInput };
    //     db.classroom.push(newClassroom);
    //     pubsub.publish('newClassroom', { newClassroom })
    //     return newClassroom;
    // }
    // ,
    addTodo: (parent, { addTodoInput }, { db, pubsub }, info) => {
        if (db.users.find((user) => user.id == addTodoInput.user)) {
            const newTodo = { id: uuidv4().toString(), ...addTodoInput };
            db.todo.push(newTodo);
            // pubsub.publish('newTodo', {newTodo})
            return newTodo;
        }
        else {
            return new Error("no user")
        }
    },
    ModifyTodo: (parent, { changeTodoInput }, { db, pubsub }, info) => {
         db.todo.map( (td) => {
                if (td.id == changeTodoInput.id)
                {
                    db.todo.td = { ...changeTodoInput };
                }
            }
        ) 
        return db.todo.td
    },
    DeleteTodo:(parent, { deleteTodoInput }, { db, pubsub }, info) => {
        const deleted=db.todo.find((td)=>td.id==deleteTodoInput.id)
        db.todo= db.todo.filter((td)=>td.id!==deleteTodoInput.id)
        return  deleted 
    }

}
