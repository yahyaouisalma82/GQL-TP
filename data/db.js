export const db = {
    students : [
        {
            id: 1,
            name: 'Fatma Laribi',
            age: 22,
            gender: "FEMALE",
            classroom: 1
        },
        {
            id: 2,
            name: 'Ahmed Mahfoudhi',
            age: 22,
            gender: "MALE",
            classroom: 2
        },
        {
            id: 3,
            name: 'Nadine Boukadida',
            age: 22,
            gender: "FEMALE",
            classroom: 3
        },
        {
            id: 4,
            name: 'Mohamed Aziz Khayati',
            age: 22,
            gender: "MALE",
            classroom: 1
        }
    ],
    classroom: [
        {
            id: 1,
            designation: 'GL3'
        },{
            id: 2,
            designation: 'GL2'
        },{
            id: 3,
            designation: 'GL4'
        },
    ],
    todo:[
        {
            id:1,
            name:"wash dishes",
            content:"C bon",
            status:"WAITING",
            user:1
        },
        {
            id:2,
            name:"wash car",
            content:"C bon",
            status:"WAITING",
            user:3
        },
    ],
    users:[
        {
            id:"1",
            name:"asma",
            email:"a@a", 
            todos:["1","2"] 
        },
        {
            id:"2",
            name:"tasnim",
            email:"a@a",
            todos:["1","2"] 
        }, 
        {
            id:"3",
            name:"salma",
            email:"a@a",
            todos:["1","2"] 
        }
    ]
}
