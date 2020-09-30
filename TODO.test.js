const { run } = require('jest');
const task = require('./TODO');

describe('TODO', () => {
    // task.data = [
    //     { 
    //         desc: "Homework", 
    //         done: true 
    //     },
    //     { 
    //         desc: "Visit Grandma", 
    //         done: false 
    //     },
    // ];

    describe('Tests the functions TODO', () => {
        it('should call function add ', () => {

            const result = task.add('run');

            const expected = [              
                { desc: "Homework", done: true },
                { desc: "Visit Grandma", done: false },
                { desc: "run", done: false }
            ];

            expect(result).toEqual(expected);
        });


        it('should call function delete ', () => {

            task.deleteTask(0);
            const result = task.print();

            const expected = [
                { desc: "Visit Grandma", done: false },
                { desc: "run", done: false }
            ];

            expect(result).toEqual(expected);
        });

        it('should call function taskDone ', () => {

            task.taskDone(1);
            const result = task.print();

            const expected = [
                { desc: "Visit Grandma", done: false },
                { desc: "run", done: true }
            ];

            expect(result).toEqual(expected);
        });

        
        it('should call function taskUndone ', () => {

            task.taskUndone(1);
            const result = task.print();

            const expected = [
                { desc: "Visit Grandma", done: false },
                { desc: "run", done: false }
            ];

            expect(result).toEqual(expected);
        });

    });

});