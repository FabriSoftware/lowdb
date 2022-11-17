# LowDB | Simple Json Database

> lowdb is a simple database that stores data in .json files

**instalation**

```
npm i @fabrisoftware/lowdb
```

Jump To
* [How To Use](#htuse)
* [Set Method](#set)
* [Get Method](#get)
* [Has Method](#has)
* [Delete Method](#delete)


## [How To Use](#htuse) 

require lowdb on you project

```js
const lowdb = require('lowdb');
const db = new lowdb.asyncDb.Database({
    name: 'test', // name of json file
    directory: './database' // directory to save the database
})
```

this generate this structure 

```
node-projectroot
└── database
    └── test.json
```
### [set](#set) 

this method saves a value in the database

```js
/*
key: key of value to store on database
value: value to store on database
*/
db.set(key, value)

// example

db.set("Jonh.age", 20);
db.set("Jonh.isAdult", true);
```

json file structure
```json
{
    "Jonn": {
        "age": 20
        "isAdult": true
    }
}
```

### [get](#get)  

this get data on database  
```js
db.get(key) // this return value of key

// example

if(db.get("Jonh.isAdult")){
    console.log("Yes!");
}else{
    console.log("No!");
}

// this print "Yes!"
```

### [has](#has) 
this comprobe if key exists in database
```js
db.has(key) // this returns bolean value

// example
if(db.has("jonh")){
    console.log("this user exists!");
}
```

### [delete](#delete) 
this delete data on database
```js
db.delete(key) // this delete the data key

// example

// first you check if the key exists
if(db.has("jonh")){
    db.delete("jonh"); 
}
```

json data structure
```json
{} //void object
```

