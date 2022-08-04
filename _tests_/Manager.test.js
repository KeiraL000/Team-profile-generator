const Manager = require("../lib/Manager");

describe("manager", () => {
    const manager = new Manager('Harry', '98765', 'harry@gmail.com', 'office123');
    it("getName = name", () => {
        expect(manager.getName()).toEqual('Harry');

    })
    it("getID = id", () => {
        expect(manager.getId()).toEqual('98765');
    })
    it("getEmail = email", () => {
        expect(manager.getEmail()).toEqual('harry@gmail.com');
    })
    it("getOffice = Office", () => {
        expect(manager.getOffice()).toEqual('office123');
    })
});