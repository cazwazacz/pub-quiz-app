# QuizLife!

## QuizLife! is an app which allows you to create quizzes and play them live with your friends!

### It is live [here](http://www.quiz-life.surge.sh).
---
Creating a quiz:
![img](/img/quizbuilder.png)
Playing with friends:
![img](/img/gameplay.png)

*To create a quiz, click on the 'Create a quiz' button, fill in the form and add the quiz. Once you are ready to play click on the quiz, share the game's link with your friends. Once you have decided the team names and the interval time for the questions, the leader have to press start and then all the other users will be able to join!*

This is the front-end interface for our [node.JS API back-end](https://www.github.com/cazwazacz/pub-quiz-api).

To run the app locally:
```
$ git clone https://github.com/cazwazacz/pub-quiz-app.git
$ cd pub-quiz-app
$ npm install
$ npm start
```
Visit http://localhost:3000/.

To run tests:
```
$ npm test
```
### Technology
---
*These are the technologies which were used in both the front and back-end*
Tech | Where? | What it does
--- | --- | ---
mongoDB | Database | Stores all our quizzes and questions
node.JS and express | Back-end | Contains a server. Communicates between our database and the user interface
ws, express-js | Back-end | Allows us to broadcast questions in real-time and to broadcast all scores when the quiz ends as well as playing multiple quizzes at the same
React | Front-end | Provides the user interface for building and playing the quizzes
sinon.js, chai, mocha | Testing | Test-runner, assertions library and spies and mocks library in both the back and front-end
zombie.js, supertest, enzyme | Testing | Browser tests, API tests and testing all React components

### Credits
---

This project was done by [Allan Wazacz](https://www.github.com/cazwazacz/), [Antonio Belmar da Costa](https://github.com/antoniobelmar/), [Marco Vanali](https://github.com/Vanals/), [Marie Kerkstoel](https://github.com/mariekerkstoel/) & [Theo Breuer-Weil](https://www.github.com/somemarsupials/).
