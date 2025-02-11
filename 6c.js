 <!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-
width, initial-scale=1.0">

<title>JavaScript Output Methods</title>
<style>
#output {
border: 1px solid #000;
padding: 10px;
margin-top: 10px;
width: 300px;
}
</style>
</head>
<body>
<h1>JavaScript Output Methods</h1>

<!-- Buttons to trigger different output methods --
>
<button onclick="displayAlert()">Alert</button>
<button
onclick="writeToDocument()">Document
Write</button>

<button
onclick="writeToElement()">InnerHTML</button
>
<button onclick="writeToConsole()">Console
Log</button>

<!-- Div for innerHTML output -->
<div id="output">InnerHTML Output will
appear here.</div>

<script>
// Method 1: Using alert()
function displayAlert() {
alert('This is an alert message!');
}

// Method 2: Using document.write()
function writeToDocument() {
document.write('<p>This text was written
using document.write().</p>');
document.write('<p style="color:
red;">Note: This will overwrite the entire document
content if called after the document is fully
loaded.</p>');

}

// Method 3: Using innerHTML
function writeToElement() {

document.getElementById('output').innerHTML =
'This text was written using innerHTML.';
}

// Method 4: Using console.log()
function writeToConsole() {
console.log('This message is logged to the
console.');
}
</script>
</body>
</html>