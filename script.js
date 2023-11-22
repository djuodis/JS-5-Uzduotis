
// Player one
var count1 = 0;
var output1 = document.getElementById('output1');

function countClicksOne() {
    count1 = count1 + 1;
    output1.innerHTML = count1;
}


// Player two
var count2 = 0;
var output2 = document.getElementById('output2');

function countClicksTwo() {
    count2 = count2 + 1
    output2.innerHTML = count2
}


// Reset
function clearText() {
    count1 = 0
    count2 = 0
    output1.innerHTML = "0";
    output2.innerHTML = "0";
    output1.style.color = 'black'
    output2.style.color = 'black'
}



var inputField = document.getElementById('input1')
var paragraph = document.querySelector('p')


inputField.addEventListener('input', function() {
    maxClicks = parseInt(inputField.value)
})


function countClicksOne() {
    if (count1 < maxClicks) {
        count1++
        output1.innerHTML = count1
        if (count1 === maxClicks) {
            changeColor1(output1) 
        }
    } 
    }


    function changeColor1(element) {
        element.style.color = 'green';
    }
    
function countClicksTwo() {
    if (count2 < maxClicks) {
        count2++
        output2.innerHTML = count2 
        if (count2 === maxClicks) {
            changeColor2(output2) 
        }
    }
    }

    function changeColor2(element) {
        element.style.color = 'red';
    }


// Input + text
inputField.addEventListener('input', function() {
    paragraph.textContent = "Playing to: " + inputField.value;
});