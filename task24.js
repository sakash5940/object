//question1
var car={
    name:"benzz",
    model:"c203",
    year:"2023",
}
Object.freeze(car)
car.price=250000,
car.name="audi",
console.log(car)//we cant change the data when we give freez.

//question2
var user={
name:"sri ganesh",
age:"25",
email:"sriganesh123@gmail.com"
}
Object.isFrozen(user)
console.log(Object.isFrozen(user))//the resuly is false because we cant freez the data

//question3
var product={
    name:"phone",
    category:"device",
    price:"20000",
}
Object.seal(product)
price:"25000"
Object.isSealed(product)
console.log(Object.isSealed(product))//we can change the data and modify the data.

//question4
var laptop={
    name:"HP",
    model:"i5 12generation",
    price:"60000"
}
console.log(Object.keys(laptop));

//question5
var house={
    location:"bhainsa",
    size:"30/40",
    price:"5000000"
}
console.log(Object.values(house))

//question6
var smartphone={
    phone:"samsung",
    Storage:"256gb",
    price:30000,
}
Object.seal(smartphone)
price=35000
console.log(smartphone)
console.log(Object.isSealed(smartphone))

//question7
var book={
    title:"The Ocean",
    author:"sumanth reddy",
    publishedyear:2020,
}
Object.freeze(book)
book.publishedyear=2025
console.log(Object.isFrozen(book))

//question8
var person={
    firstname:"suryavamshi",
    lastname:"akash patil",
    age:23,
}
console.log(Object.keys)
console.log(Object.values)

//question9
var course={
    title:"software",
    instructor:"fullstack developer",
    duration:"1years",
}
console.log(Object.entries(course))
delete course.duration
console.log(course)

//question10
var employee={
    name:"sumanth",
    position:"software",
    salary:"50000",
}
Object.seal(employee)
employee.salary="60000"
console.log(Object.keys(employee))
console.log(Object.values(employee))


//task2
//question1
//question2
var c="sri ganesh"
console.log(c.toUpperCase())
console.log(c.length)

//question3
var d="sumanth"
console.log(d.charCodeAt(5))

//question4
var e="      akash"
var f="patil      "
var g= e.trimStart()
var h= f.trimEnd()
var result=g.concat(" ",h)
console.log(result)
 
//question5
var i="RAVI"
var j="REDDY"
var z=j.toLocaleLowerCase()
var result1=i.concat(z)
console.log(result1)

//question6
var k="       kruthikpatil"
var l=k.trimStart();
console.log(l.toLocaleUpperCase());

//question7
var o="akash"
var p= o.charAt(4)
console.log(p)
console.log(p.toLocaleUpperCase())

//question9
var input="       hello world      "
var q=input.trimStart()
var r=input.trimEnd()
var result2=q.concat(r)
console.log(result2)

//question10
var string1="HELLO"
var string2="WORLD"
var l1= string1.toLocaleLowerCase()
var l2= string2.toLocaleLowerCase()
var result3= l1.concat(" ",12)
console.log(result3)
var t=result3.charAt(2)
console.log(t)
