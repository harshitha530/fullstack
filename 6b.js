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
<div id="output">InnerHTML Output will app