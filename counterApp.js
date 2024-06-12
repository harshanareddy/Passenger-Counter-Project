let count = 0;
let countEl = document.getElementById("count-el");
let entriesEl = document.getElementById("entries-el");

function increment(){
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

function save(){
    let entriesStr = count + " - "
    entriesEl.textContent += entriesStr;
    count = 0
    countEl.textContent = 0;
}
