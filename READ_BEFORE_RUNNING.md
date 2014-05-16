Watch the screen capture to see how we wrote all this stuff. It's the best way to see the step by step way to create these connections. It's at the following url:

https://vimeo.com/87738759



Instructions for getting this demo running:

1) Upload the Arduino Code to your Arduino.

2) Connect some sort of sensor to pin A0, and an LED to pin 13

3) Open Terminal, and navigate to this folder, typing: "cd this/folders/path/name/on/your/computer"

4) You need to install 3 NodeJS modules to get this working, so in Terminal enter:
	
	npm install express
	npm install serialport
	npm install ws

5) Now with the modules installed, enter "node app.js" in Terminal, and now the Node server is running

6) Open your web browser, and go to the url "localhost:8000"

7) When you play with your sensor, the browser's background color should change. And when you click your webpage's background, your Arduino's LED should turn on