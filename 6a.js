<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">

<meta name="viewport" content="width=device-
width, initial-scale=1.0">

<title>Embedding Internal and External
JavaScript</title>
<script src="script.js"></script> <!-- Link to
external JavaScript file -->
<script>

// Internal JavaScript
function showAlertInternal() {
alert('This is an internal JavaScript alert!');
}
</script>
</head>
<body>
<h1>Embedding Internal and External
JavaScript</h1>
<button onclick="showAlertInternal()">Internal
JavaScript Alert</button>
<button onclick="showAlertExternal()">External
JavaScript Alert</button>
</body>
</html>