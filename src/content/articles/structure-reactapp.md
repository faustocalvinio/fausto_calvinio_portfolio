---
title: "❓ How would I structure a React app?"
slug: structure-reactapp
excerpt: "It\u0027s a beautiful world out there."
publishedAt: '2023-09-05'
status: published
tags: []
cover: null
---

```jsx
📁src
|
|_ 📁components
|  |_ 📁Cards
|  |  |_ 📄MainCards.tsx
|  |_ 📁Buttons
   |  |_ 📄RedButton.tsx
|_ 📁api
|  |_ 📄Auth.ts
|  |_ 📄Event.ts
|_ 📁Pages
|  |_ 📁HomePage
|  |  |_ 📄HomePage.tsx
|  |_ 📁LoginPage
|     |_ 📄LoginPage.tsx
|_ 📁contexts
|  |_ 📄AuthContext.ts
|  |_ 📄EventContext.ts
|_ 📁hooks
|  |_ 📄useAuth.ts
|  |_ 📄useEvent.ts
|_ 📁utils
|  |_ 📄HelperFunctions.ts
|  |_ 📄Date.ts
|_ 📁assets
|  |_ 📁images
|  |  |_ 📄logo.svg
|  |  |_ 📄background.jpg
|  |_ 📁styles
|     |_ 📄global.css
|     |_ 📄theme.ts
|_ 📄App.tsx
|_ 📄index.ts

```

{% mark %}src{% /mark %} This is the main folder where your React app lives.

{% mark %}components{% /mark %} Think of this like a box of LEGO pieces. It holds small, reusable parts of your app, like building blocks. Inside, you have separate folders for different types of blocks:
Cards: These are special blocks that you can use to create things like information cards.
Buttons: Here, you keep different types of buttons you can use in your app.

{% mark %}api{% /mark %} This is like a special toolbox where you keep tools for talking to the internet.
Auth.ts: It probably has stuff for logging in and keeping your app secure.
Event.ts: This could handle things like scheduling events or activities in your app.

{% mark %}Pages{% /mark %} Imagine this as a storybook with different pages of your app.
HomePage: This page contains all the stuff for your app's main screen.
LoginPage: This is where users can log in to your app.

{% mark %}contexts{% /mark %} Think of these like invisible helpers that carry messages between different parts of your app.
AuthContext.ts: It helps parts of your app know if someone is logged in or not.
EventContext.ts: This one helps your app share information about events.

{% mark %} hooks {% /mark %} These are like shortcuts or tricks to make parts of your app work better.
useAuth.ts: It helps with all the stuff related to logging in and out.
useEvent.ts: This one makes working with events easier.

{% mark %}utils{% /mark %} This is your toolbox of handy tools for your app.
HelperFunctions.ts: Contains tools for doing all sorts of jobs in your app.
Date.ts: It might help you handle dates and times in your app.

{% mark %}assets{% /mark %} This is where you keep pictures, designs, and styles for your app.
images: Stores the pictures your app uses, like a logo or background.
styles: Holds the rules for how your app should look.

{% mark %}App.tsx{% /mark %} Imagine this as the main stage where your app comes to life. It decides what to show and how everything should work.

{% mark %}index.ts{% /mark %} This is like the stage manager. It tells your app to get ready and appear on the screen for everyone to see.
