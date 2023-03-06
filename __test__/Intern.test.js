const Intern = require("../lib/Intern")


test("can set a school argument for the constructor",()=>{
    const school = "UOB"
    const int=new Intern ("Seema", "seema.bibi@hotmail.co.uk",12,school)
    expect (int.school).toBe (school)
})



test("can get school argument for the constructor",()=>{
    const school = "UOB"
    const int=new Intern ("Seema", "seema.bibi@hotmail.co.uk",12,school)
    expect (int.getSchool()).toBe (school)
})