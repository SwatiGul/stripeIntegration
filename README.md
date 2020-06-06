1. Install node.js from: https://nodejs.org/en/download/
> To ensure that node.js is installed, open powershell or command prompt and type 
```
node -v
```

2. Launch node.js command prompt and to add scaffolding for the app, create new react app using following command:
```
npx create-react-app my-app
```

3. Navigate to my-app folder and start the application in dev mode. 
```
npm start
```
> Test launching the app http://localhost:3000/

4. Install stripe package
```
npm install --save stripe
```
> Make sure to check stripe module is added under my-app\node modules folder

5. Copy and add/replace all files from github repo to my-app folder.
server.js
client.js
package
package-lock
checkout.html
global.css
README

6. Start the server
```
npm start
```

7. Launch the app  http://localhost:4242/checkout.html

8. Test with the cards for stripe integration.

PS: A logfile will be created under my-app folder for any successful payment- successfulPayments_Log.

