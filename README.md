# **Lyrical Pop Quiz**

## **Code Institute Portfolio Project II**

## **Background**
I love music and specially singing along to it. No matter if under the shower, in the car or whenever a good lyric just gets me. People around me would probably say I’m quite good with lyrics but when put to a test I can confidently say, this is not the case. Often, we use the words we think are the lyrics but if checked mostly it just sound similar. 
If you want to know how good your lyrical knowledge of popular songs is then this is the perfect game for you! 

## **Contents**
* [Background](#background)
* [Strategy](#strategy)
* [Scope](#scope)
* [User Experience UX](#user-experience-ux)
    * [Target audience](#target-audience)
    * [User Stories](#user-stories)
* [Wireframes](#wireframes)
* [Design Choices](#design-choices)
    * [Color Palette](#color-palette)
    * [Typography](#typography)
* [Features](#features)
    * [Logo](#logo)
    * [Homepage](#homepage)
    * [Rules](#how-to-play)
    * [Username](#username)
    * [Play](#play)
    * [Game](#game)
    * [Results](#results)
    * [Future Features](#future-features)



## **Strategy**
Everybody loves singing along to their favorite song but how much of the lyrics do we actually know? In *Lyrical Pop Quiz* everybody can put their lyrical knowledge to the test. 

## **Scope**
The Scope of this project is creating a website with the HTML,CSS and JavaScript framework. The site’s users can play an online quiz to test their specific knowledge of pop song lyrics. The features include creating a username, tracking the score and and a countdown timer. 

## **User Experience UX**

### **Target Audience**

This game is designed for everybody who enjoys pop music and would like to test if they can gues the right lyric. 

### **User Stories**

- As a First Time User
    -	I can see the name and logo of the quiz application.
    - I can find instructions on how to play the game. 
    -	I can see a timer that shows how much time is left to play the game. 
    -	I can see the questions and three answer options.
    -	I can see how many answers I got right or wrong. 

- User Goals 
    -	To be able to play the quiz app on a selected range of device sizes.
    -	To be able to enter a username of my choice. 
    -	To be able to see the remaining time. 
    -	To be able to put my lyrical knowledge to test with help of multiple choice. 

## **Wireframes**

The wireframes where created using Figma.

Homepage:

![Homepage wireframe](documentation/wireframes/wireframe-home.png)

Section for entering username:

![Username-form wireframe](documentation/wireframes/wireframe-username-form.png)

Game play section:

![Game Play Section](documentation/wireframes/wireframe-main-game-section.png)

Result section:

![Homepage wireframe](documentation/wireframes/wireframe-result-page.png)

How to play page:

![How to play wireframe](documentation/wireframes/wireframe-rules.png)

## **Design Choices**
### **Color Palette**

The idea behind the color palette was reflecting the mood of a 90's pop art comic with its vibrant and contrasting colors. 
![Color palette](documentation/design/Lyrical-Pop-Quiz-colors.png)

### **Typography**

The Fonts used is [Bungee](https://fonts.google.com/specimen/Bungee) and [Martel](https://fonts.google.com/specimen/Martel). Bungee is a typeface that celebrates the urban sign. Martel is a libre font development project. Bungee being bold and round reminded me of somehting playfull and comic-like. This is why I choose the font. I used Martel on the rules page to make it more readable and underline the less playful information. 

## **Features**

The game application has two pages *Home* and *How to play*. The *Home* page is structured into different sections that are either shown or hidden depending on the user interaction. 
The *How to play* page can only be accessed through the *Home* page which is the landingpage.

### **Logo**

![Logo](documentation/screenshots/screenshot-logo.png)

- The logo features a casette with headphones and the games name *Lyrical Pop Quiz*.
- It appears in bright colors to reflect the color-sheme of the application. 
- The logo was created using Canva.com.

### **Homepage**

![Home](documentation/screenshots/screenshot-home-page.png)

- In the center top of the page you see the logo with the games name *lyrical Pop Quiz*.
- The two main buttons *Start Game* and *How To Play* are for navigating through the application. 
- Clicking on *Start Game* will hide the landingpage section and show the username-form section. 
- Clicking on the *How To Play* button will open a new window with the rules to the game. 

### **How to play**

![Rules](documentation/screenshots/screenshot-how-to-play.png)

- A new page opens with the instructions on how to play the game.
- When *Play now* on the bottom of the poge is clicked it brings you back to the landingpage. 

### **Username**

![Username](documentation/screenshots/screenshot-enter-username.png)

- When *Start Game* is clicked the landingpage section is hidden and a form to enter the username appears. 
- A username is required and if no username is provided an error-box is shown after pressing *Enter*.
- If username is successfully entered and *Enter* is clicked username-form section is hidden and main-game section will be shown. 

### **Play**

![Play](documentation/screenshots/screenshot-play.png)

- Entered *Username* will be displayed in message ontop of *Play* button. 
- *Play* button shows the timer and the game. 

### **Game**

![Game](documentation/screenshots/screenshot-game.png)

- The *timer* that counts down 45 seconds is shown under the message with the *username*.
- The lyrics is shown and has to be completed with one of the three answer options 
- If the correct answer is choosen the answer is highlighted green if the wrong answer was selected its highlighted red.
- The correct and incorrect answers are being counted in the background and will be displayed after the time has run up. 
- After selecting an answer the *Next* button appears to be able to got to the next question. 

### **Results**

![Results](documentation/screenshots/screenshot-result-page.png)

- After the timer has run up the *Result* page is shown. 
- Depending on the right and wrong lyrics choosen it displays a *message* for the user. 
- The amount of all *right* and *wrong* answers will be shown. 
- The *Home* button will bring you back to the landingpage. 

### **Future Features**

- Implement a shuffle function that shuffles randomly through the given lyrics. 
- Implement different levels with less time.








