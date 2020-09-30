var readlineSync = require('readline-sync');


let listTask = [
    { desc: "Homework", done: true },
    { desc: "Visit Grandma", done: false },
];

// let choseIndex = 0;
// const action = ["Add", "Delete", "Mark as done", "Un mark as done", "print all the items with their status."]
// index = readlineSync.keyInSelect(action, "Select one of the options?");

const getTaskArr = () => {
    const newArray = listTask.map((task) => {
        return task.desc;
    });
    return newArray;
}

const add = (item) => {
    listTask.push({ desc: item, done: false });
    return listTask;
};

const deleteTask = (choseIndex) => {
    listTask.splice(choseIndex, 1);
    console.log(listTask);
    return listTask;
};

const taskDone = (choseIndex) => {
    listTask[choseIndex].done = true;
    console.log(listTask);
    return listTask;
};

const taskUndone = (choseIndex) => {
    listTask[choseIndex].done = false;
    console.log(listTask);
};

const print = () => {    
    listTask.sort(function(x, y) {
        return (x.done === y.done)? 0 : x.done? 1 : -1;
    });
    return listTask;
};

// startToDo=()=>{
//     switch (index) {
//         case 0:
//             item = readlineSync.question('please enter your new task \n');
//             add(item);
//             break;
//         case 1:
//             choseIndex = readlineSync.keyInSelect(getTaskArr(), "Which Task you want to delete?");
//             deleteTask();
//             break;
//         case 2:
//             choseIndex = readlineSync.keyInSelect(getTaskArr(), "Which task is done?");
//             taskDone();
//             break;
//         case 3:
//             choseIndex = readlineSync.keyInSelect(getTaskArr(), "Which task is undone?");
//             taskUndone();
//             break;
//         case 4:
//             print(listTask);
//             break;
//         default:
//             break;
//     }
// }
// startToDo();


module.exports = {
    add ,
    deleteTask,
    taskDone,
    taskUndone ,
    print,
   
};

// add('run');
// print();
// deleteTask(0);
// print();





