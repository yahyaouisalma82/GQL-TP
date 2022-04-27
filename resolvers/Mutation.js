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
            pubsub.publish('todo', {
                todo:{
                    mutation: "Added",
                    data: newTodo 
                }
            })
            return newTodo;
        }
        else {
            return new Error("no user")
        }
    },
    ModifyTodo: (parent, { changeTodoInput }, { db, pubsub }, info) => {
         console.log( db.todo.map( (td) => {
                if (td.id == changeTodoInput.id)
                {  
                    td = { ...td, ...changeTodoInput }; 
                    pubsub.publish('todo', {
                        todo:{
                            mutation: "modified",
                            data: td 
                        }
                    })
                }
            }
        ) );
        return db.todo 
    },
    DeleteTodo:(parent, { deleteTodoInput }, { db, pubsub }, info) => {
        const Index = db.todo.findIndex(td =>{
            return td.id=== deleteTodoInput.id
        } )
        if (Index === -1) throw new Error('todo not found');
  
        const todos = db.todo.splice(Index, 1);
        return todos[0];
    }

}
