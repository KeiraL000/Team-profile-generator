const Engineer = require("../lib/Engineer");

describe("engineer", () => {
    const engineer = new Engineer('Harry', '98765', 'harry@gmail.com', 'github123');
    it("getName = name", () => {
        expect(engineer.getName()).toEqual('Harry');

    })
    it("getID = id", () => {
        expect(engineer.getId()).toEqual('98765');
    })
    it("getEmail = email", () => {
        expect(engineer.getEmail()).toEqual('harry@gmail.com');
    })
    it("getGithub = github", () => {
        expect(engineer.getGithub()).toEqual('github123');
    })
});