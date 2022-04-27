import {db} from "../data/db.js";

export const User = {
    todos: ( user ) => { 
        return  user.todos.map(id=>db.todo.find(
            (td)=>td.id==id
        ));
    }
}
