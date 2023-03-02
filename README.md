
## 👉 Open [netflix.clone.app](https://my-clon-netflix.vercel.app/) to view it in the browser.

## yet another Netflix clone app 🤷

## About

ℹ️ This is a Netflix clone with IMDb API integration, some Stripe magic for subscriptions, and Firebase for cloud storage.

I've implemented:
- Netflix login page - you can use example credentials below if you don't want to register
- IMDb API integration - for movie thumbnails, trailers and descriptions
- Firebase for authentication and database
- Stripe payments - recurring subscriptions same as on Netflix (user can change their plan, unsubscribe etc.)

## 💻 What did I use?

* Next.js
* IMDb  (movies data)
* TailwindCSS
* TypeScript
* Firebase (auth)
* Recoil.js (state management)
* ReactPlayer (video players)
* Stripe
* MUI

## 🧑‍💼 Example credentials
login: example@gmail.com   
password: 123456

## How to test payment process?
Right now app is in the test mode so you can use these test card data to pay for your subscription:

#### Card number: 4242 4242 4242 4242
#### MM/YY: Any date in the future
#### CVC: any 3 digit number

For more information you can check [Stripe's list of cards numbers](https://stripe.com/docs/testing#cards).
