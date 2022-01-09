# **Determined**

**Overview:** Determined is a workout tracking program using a Flask backend and a React front end.</br>
**Motivation:** I went to the gym quite often before the we had to be locked down and some of the workout log apps I used didn't work quite the way I wanted so I thought I'd try to make one of my own. </br>
The exercise database being used is located at https://github.com/wrkout/exercises.json</br>
Determined repository is located at https://github.com/wonaval/determined </br>
Deployed at TBA

## ERD - Database Diagram

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

| ROUTE  | Path                             | Description                       |
| :----- | :------------------------------- | :-------------------------------- |
| POST   | /workout                         | Create workout log                |
| GET    | /workout                         | Get all workout logs              |
| GET    | /workout/:workout_id             | Get individual workout log        |
| DELETE | /workout/:workout_id             | Delete workout log                |
| POST   | /workout/:workout_id/log         | Create exercise log under workout |
| GET    | /workout/:workout_id/log         | Get all exercises under workout   |
| PUT    | /workout/:workout_id/log/:log_id | Update execise log under workout  |
| DELETE | /workout/:workout_id/log/:log_id | Delete exercise under workout     |

## Technology

Backend - PostgreSQL, Flask, SQLAlchemy, Python </br>
Frontend - React, Javscript, HTML, CSS

## Component Diagram

![Component Diagram](/assets/comp.png)

## Wireframes

![Wireframe](/assets/wire.png)

## User Stories

When I test, test happens...

## MVP

- [] Sign up, sign in, update, and delete a user
- []

## Stretch Goals

- []

## Timeline

- MVP by Wednesday 1/11/2022
- Styling by Thursday 1/12/2022
- Stretch goals maybe Friday 1/14/2022

## Challenges/Obstacles

-
