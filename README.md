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

4.Install stripe package

```
npm install --save stripe
```
> Make sure to check stripe module is added under my-app\node modules folder

5.Copy and add/replace all files from github repo to my-app folder.
-server.js
-client.js
-package
-package-lock
-checkout.html
-global.css
-README


6. Start the server
```
npm start
```

7. Launch the app  http://localhost:4242/checkout.html

8. Test with the cards for stripe integration.

PS: A logfile will be created under my-app folder for any successful payment- successfulPayments_Log.

9. To test the endpoint for processing orders for successful payments, first install Stripe CLI using the documentation:
https://stripe.com/docs/stripe-cli

Now run following commands in the command prompt with current directory being where Stripe CLI is installed:

a. Pair Stripe CLI with your stripe account
```
stripe login
```
Follow the instructions to open the browser and allow access to complete the pairing. 


b. Now listen to all the payment_intent.succeeded events and forward to the webhook-processOrders for async fulfilment.
```
stripe listen --events payment_intent.succeeded --forward-to localhost:4242/processOrders
```

c. In a new terminal trigger the payment_intent.succeeded event to test the flow to processOrders endpoint.
```
stripe trigger payment_intent.succeeded
```

> Verify that the command prompt where you typed listen command (step b. above) something like following should be shown:
Ready! Your webhook signing secret is whsec_Bh70XBMyijH8RtV6FW9anlll6RavdmNs (^C to quit)
2020-06-04 22:46:23   --> payment_intent.succeeded [evt_1GrHKsDpS0vvbzrvZ0V5R4Dc]
2020-06-04 22:46:23  <--  [200] POST http://localhost:4242/processOrders [evt_1GrHKsDpS0vvbzrvZ0V5R4Dc]

PS: You can also test this flow by triggering valid payment details in the checkout page (localhost:4242/checkout.html) instead of triggering the event manually via stripe CLI.
