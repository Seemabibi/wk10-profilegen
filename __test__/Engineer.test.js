const Engineer = require ("../lib/Engineer")

test("can set a github argument for the constructor",()=>{
    const Github = "Seemabibi"
    const eng=new Engineer ("Seema","seema.bibi@hotmail.co.uk",12,Github)
    expect (eng.Github).toBe (Github)
})

test("can get github argument for the constructor",()=>{
    const Github = "Seemabibi"
    const eng=new Engineer ("Adiba","seema.bibi@hotmail.co.uk",12,Github)
    expect (eng.getGithub()).toBe (Github)
})




