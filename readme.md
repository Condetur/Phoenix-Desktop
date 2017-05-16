### Pheonix-desktop

The Desktop app for the pheonix project.
In short, Tino created a Java app which loads HTML and Javascript.
To help code the app faster, Tino uses Gulp in order to compile React and .jsx into a clean, javascript file.

First, the .jsx files are taken and converted into acceptable es2015 code. However, a module system is not supported and thus webpack is used to take the compiled files from the .temp and move them into Build, where they are ACTUALLY compiled into one large jumble of code.

What I did now was simply a test as a proof of concept. Now that I know it works, I will take this app and create a full React app! Exciting times ahead.