# Gastronaut Challenge

Hi! This repo is destinated to achieve the task from [Gastronaut](https://www.gastronaut.ai).
You can find the instructions [here](https://github.com/gastronaut-gmbh/fullStackChallenge)

## Instalation

- Clone this repository
- Navigate inside the folder
- Run ``` npm install ```
- Then, run ```npm start```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- In [http://localhost:3000](http://localhost:3000) without adding any Id from a Restaurant or the ID was not found, the app will send a Alert (from MaterialUI) showing a message.
- To access a Restaurant, the :idRestaurant needs to be added to the url (For example, [http://localhost:3000](http://localhost:3000)/neo-heidelberg or [http://localhost:3000](http://localhost:3000)/schillingroofbar)


## Project Structure

I have tried to split the project in different parts (or Atoms) to have a good Separation of Concerns.
It goes:

* Public
    * locales -> Here I've added the translation files (both DE and EN).

* assets -> Images and Utils (in this case constants of the project)

* Components -> Contains all the components quite separated which will be use in the project.
    * ButtonContainer -> Main buttons.
    * Events -> The event from the Restauraunt.
    * Hooks -> Functions to use for the project.
    * Image -> Component where the image will be displayed.
    * MainPage -> Component which gathered Image, Events and Button Container
    * Navigation -> Necessary components to navigate (Footer, Header, Toolbar, etc.)
    * UI -> Related to the UI components.

* Containers -> I believe that the components inside this folder do not belong to components because are bigger than that, such as the Builder which it's the Core file to build all the component and Layout which allows us to use MaterialUI.

* Routes -> File where the app can handle different request to URL.

* Services -> Custom Axios service to add a basic instance.

* Main files ->

## External packaged used

* [MaterialUI](https://material-ui.com/) -> It was a MUST for this challenge, but also it is a great packaged to use for your UI.

* [StyledComponents](https://styled-components.com/) -> There are a couple of approach to use CSS in React but I found this package quite interesting. I was using it in a personal project, with ReactBootstrap, and I really liked it.
**Note** -> That's file in each component, you will find a css with the extension js and it's because styled component use it.

* [AtomicLayout](https://redd.gitbook.io/atomic-layout/) -> As Material-UI was a must for this task, I strongly believe that this package is a MUST for every project. It uses css-grid as its core and it's awesome to build responsive web!

* [ReactRouter](https://reactrouter.com/) -> It's the most common package to use to navigate in React.

* [Axios](https://github.com/axios/axios) -> HTTP Client

* [i18n](https://www.npmjs.com/package/i18n) -> Used for internationalization. It's really easy to use in your app and with the LanguageToggle which was delerived from Gastronaut, it was really easy to implement.


## Assumptions

* I haven't deploy this project on Firebase because I believe that you may have information (or just you don't want to deploy it) online. I would rather asking before doing it than deploying without the correct information.

* Links of the buttons -> In the github page there were 2 (I think) that it said "Won't work" but in fact, it redirect the app to that link. So, I added than functionality to the link taking into account the Event, Hour, etc...

* UI Style -> I tried to keep it simple because most of the times is better.

* The translations files, I have downloaded and pasted into my project. Maybe it can 


## Improvements

I believe that I could have done some improvements to the Task!
- Add Redux -> I have use Redux with a React Native project that I did, and it's great to share the state amongh the whole project. It's a must for production project. Here I could have used when the Image finishes the loading.
- Add more style -> As I said before, I tried to keep it simple but maybe I would like to add some styling to the main page. I was focused more on the responsive and functionality part. Although, I try to add some style and it seems pretty good :) !


## Thanks

Thank you guys for the opportunity again! I hope that this task is ok for you and if you have any question, I am available!
