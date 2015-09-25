<!doctype html>
<html>
<head>
    <title>Hello World</title>
    <asset:javascript src="traceur/traceur.js" />
    <asset:javascript src="system.js/system.js" />
    <asset:javascript src="angular2-build/angular2.dev.js" />
</head>
<body>
<script>
    System.import('assets/app');
</script>
<hello-world></hello-world>
</body>
</html>