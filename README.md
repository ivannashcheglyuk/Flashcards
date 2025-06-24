**Web Development Project 3 - *Flashcards***

Submitted by: **Ivanna Shcheglyuk**

This web app: 
This is a simple and fun **flashcards game-style website** built with React. Users are shown one flashcard at a time with a question and get **three chances** to guess the correct answer. After answering (whether correct or not), they can move to the **next flashcard** — or go **back** to review the previous one.
The goal is to test memory, enjoy learning, and experience a game-like interaction.

Time spent: 10 + 5 = 15 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  [x] Application features a clearly labeled input box with a submit button where users can type in a guess
  [x] Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  [x]  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
  [x] **The user can navigate through an ordered list of cardss**
  [x] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  [x] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  [x] Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation


The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!

- Compare answers case-insensitively  
- Block input after **3 incorrect attempts**  
- Allow navigation even after reaching the guess limit  
- State reset on "Back" (guess counter resets per card) 

## Video Walkthrough

Here's a walkthrough of implemented required features:
<img src="https://github.com/ivannashcheglyuk/Flashcards/blob/main/project2.gif?raw=true" alt="Project 2 Demo GIF" width="500">

GIF created with [Bandicam](https://www.bandicam.com/) and [EZGIF](https://ezgif.com/).

## Notes

Describe any challenges encountered while building the app.
-Managing flashcard **navigation history** and ensuring the previous index was tracked correctly when  going back  
- Resetting the **guess counter** only when returning to a previous flashcard  
- Controlling the app behavior after **three failed guesses** without breaking the user flow  
- Maintaining clean **state management** for guess, history, and feedback  
- Smoothing out the logic for consistent feedback after each guess  
- Optionally explored adding a **flip animation** between question and answer (not implemented yet)

## License

    Copyright 2025 Ivanna Shcheglyuk

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
