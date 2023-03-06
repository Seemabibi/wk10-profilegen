const Employee = require ("../lib/Employee")

test("can set a name argument for the constructor",()=>{
    const name = "Seema"
    const emp=new Employee (name)
    expect (emp.name).toBe (name)
})

test("can set a email argument for the constructor",()=>{
    const email = "seema.bibi@hotmail.co.uk"
    const emp=new Employee ("Seema",email)
    expect (emp.email).toBe (email)
})

test("can set a id argument for the constructor",()=>{
    const id = 12
    const emp=new Employee ("Seema", "seema.bibi@hotmail.co.uk", id)
    expect (emp.id).toBe (id)
})




test("can get name through get name method",()=>{
    const name = "Seema"
    const emp=new Employee (name)
    expect (emp.getName()).toBe (name)
})

test("can get email argument for the constructor",()=>{
    const email = "seema.bibi@hotmail.co.uk"
    const emp=new Employee ("Seema",email)
    expect (emp.getEmail()).toBe (email)
})

test("can get id argument for the constructor",()=>{
    const id = 12
    const emp=new Employee ("Seema", "seema.bibi@hotmail.co.uk", id)
    expect (emp.getId()).toBe (id)
})