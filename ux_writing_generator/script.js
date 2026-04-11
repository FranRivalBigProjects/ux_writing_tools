function calc(){
let length=parseFloat(document.getElementById('a').value)||0;
let clarity=parseFloat(document.getElementById('b').value)||0;
let tone=parseFloat(document.getElementById('c').value)||0;

let score = (clarity + tone + (100 - length*2)) / 3;

let level = score > 80 ? "Excellent UX Writing ✍️" :
            score > 50 ? "Average Writing ⚖️" :
            "Needs Improvement ⚠️";

let suggestions = "";
if(length > 12) suggestions += "Text too long. Keep it concise.<br>";
if(clarity < 50) suggestions += "Improve clarity. Use simpler words.<br>";
if(tone < 40) suggestions += "Tone too cold. Add friendliness.<br>";

document.getElementById('result').innerHTML =
"Writing Score: " + score.toFixed(2) + "<br><br>" +
level + "<br><br>" + suggestions;
}
