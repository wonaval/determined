# **Determined**

**Overview:** Determined is a workout tracking program using a Flask backend and a React front end </br>
**Motivation:** I went to the gym quite often before the we had to be locked down and I wanted to see if I could make a workout log application </br>
The exercise database being used is located at https://github.com/wrkout/exercises.json </br>
Determined repository is located at https://github.com/wonaval/determined </br>
Deployed at TBA

## ERD - Entity Relationship Diagram

![ERD Diagram](/assets/erd.png)

## Route Inventory

### User Routes

| ROUTE  | Path           | Description |
| :----- | :------------- | :---------- |
| POST   | /user          | Create user |
| POST   | /user/login    | Login user  |
| GET    | /user/verify   | Verify user |
| PUT    | /user/:user_id | Update user |
| DELETE | /user/:user_id | Delete user |

### Exercise Route

| ROUTE | Path      | Description           |
| :---- | :-------- | :-------------------- |
| GET   | /exercise | Get execises database |

### Routine Routes

| ROUTE  | Path                 | Description                |
| :----- | :------------------- | :------------------------- |
| POST   | /routine             | Create routine             |
| GET    | /routine             | Get all routines for user  |
| GET    | /routine/:routine:id | Get routine info           |
| PUT    | /routine/:routine_id | Update routine information |
| DELETE | /routine/:routine_id | Delete routine             |

### Workout Routes

| ROUTE  | Path                             | Description                |
| :----- | :------------------------------- | :------------------------- |
| POST   | /workout                         | Create workout log         |
| GET    | /workout                         | Get all workout logs       |
| GET    | /workout/:workout_id             | Get individual workout log |
| DELETE | /workout/:workout_id             | Delete workout log         |
| POST   | /workout/:workout_id/log         | Create log under workout   |
| GET    | /workout/:workout_id/log         | Get all logs under workout |
| PUT    | /workout/:workout_id/log/:log_id | Update log under workout   |
| DELETE | /workout/:workout_id/log/:log_id | Delete log under workout   |

## Technology

Backend - PostgreSQL, Flask, SQLAlchemy, Python </br>
Frontend - React, Javscript, HTML, CSS

## Component Diagram

![Component Diagram](/assets/comp.png)

## Wireframes

Wireframe can be found at https://www.figma.com/file/j8coASLST0vN7vTGgXIwnk/Determined?node-id=13%3A34

## User Stories

- When I first load the app, I am greeted with a landing page describing the app, with sign up and sign in links
- When I sign up or sign up, I am brought to the My Routines page
- When I am on the My Routines page, I can view currently made routines, create a new routine, update a routine, delete a routine, or start a new log from an existing routine
- When I create a routine, I am brought to a page where I can add an exercise from a list of exercises and save the routine
- When I click on the My Logs page, I can view existing logs where I can edit or delete them
- When I click on Add New Log from the My Routines page, I am taken to the Add New Log page that has a lists of all the exercises that I can add. I can edit sets/reps/weight and complete adding a new log as well
- When I click on My Account, the page displays my current account information. I am also able to edit or delete my account

## MVP - Minimum Viable Product

- [ ] Sign up, sign in, update, and delete a user
- [ ] Create, view, update, and delete routine
- [ ] Create, view, update, and delete a workout log

## Stretch Goals

- [ ] Track stats from previous workout
- [ ] Mobile app
- [ ] Filter exercise databse

## Timeline

- MVP by Wednesday 1/11/2022
- Styling by Thursday 1/12/2022
- Stretch goals maybe Friday 1/14/2022

## Challenges/Obstacles

- Not as familiar with Python as I am with Javascript but I should be able to complete this project on time
