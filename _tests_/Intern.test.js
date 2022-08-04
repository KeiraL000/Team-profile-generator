const Intern = require("../lib/Intern");

describe("intern", () => {
    const intern = new Intern('Harry', '98765', 'harry@gmail.com', 'NMC');
    it("getName = name", () => {
        expect(intern.getName()).toEqual('Harry');

    })
    it("getID = id", () => {
        expect(intern.getId()).toEqual('98765');
    })
    it("getEmail = email", () => {
        expect(intern.getEmail()).toEqual('harry@gmail.com');
    })
    it("getSchool = school", () => {
        expect(intern.getSchool()).toEqual('NMC');
    })
});