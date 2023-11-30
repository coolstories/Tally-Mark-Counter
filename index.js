
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
  
    let newEntry = count + " - "
 
    saveEl.textContent += newEntry
 
    console.log(count)
}

function group() {
     count = 0
     countEl.textContent = count
}

 