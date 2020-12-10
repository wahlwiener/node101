const fs = require('fs')
const moment = require('moment')

const todoList = [
    {
        text: 'Go to the museum',
        date: moment('19.12.2021, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: true 
    },
    {
        text: 'start programming assignment',
        date: moment('21.11.2020, 22:00', 'DD.MM.YYYY, hh:mm'),
        id: 2,
        done: true
    },    
    {
        text: 'buy a DVD for my sister',
        date: moment('19.12.2020, 08:20', 'DD.MM.YYYY, hh:mm'),
        id: 3,
        done: false
    },
    {
        text: 'Go for a walk',
        date: moment('19.12.2020, 12:10', 'DD.MM.YYYY, hh:mm'),
        id: 4,
        done: true
    }


  ]


  const json = JSON.stringify(todoList)

  fs.writeFileSync('todo.json', json)

  
