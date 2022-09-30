import ToDo from './../src/main.js';


describe("ToDo", () => {
test("Should create a ToDo object with bool value false ", ()=>{

    let testToDo = new ToDo("test");
    const output = !testToDo.status;

    expect(output).toEqual(true);
});
});