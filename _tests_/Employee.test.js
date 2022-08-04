const Employee = require("../lib/Employee");

describe("employee", () => {
    const employee = new Employee('Harry', '98765', 'harry@gmail.com');
    it("getName = name", () => {
        expect(employee.getName()).toEqual('Harry');

    })
    it("getID = id", () => {
        expect(employee.getId()).toEqual('98765');
    })
    it("getEmail = email", () => {
        expect(employee.getEmail()).toEqual('harry@gmail.com');
    })
});