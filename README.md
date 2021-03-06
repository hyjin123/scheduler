# Interview Scheduler

- Interview Scheduler manages interview appointments from Monday to Friday. It allows you to add, edit, and delete appointments in a selected day. You are able to choose any of the interviewer you would like to interview with (and edit them whenever you want to, of course).

- This project focuses on a single page application (SPA) and is built using React. Data is persisted by the API server using a PostgresSQL database.

- Jest and Cypress tests are used through the development of this project.

## Final Product

- This is the main page of the Interview Scheduler!

!["Screenshot of the Main App"](https://github.com/hyjin123/scheduler/blob/master/docs/Application-Main-Page.png?raw=true)

- You are able to create appointments.

!["Screenshot of the Appointment Form"](https://github.com/hyjin123/scheduler/blob/master/docs/Create-Appointment.png?raw=true)

- You are able to delete existing appointments.

!["Screenshot of Delete Confirmation"](https://github.com/hyjin123/scheduler/blob/master/docs/Delete-Confirmation.png?raw=true)

- You are able to edit existing appointments.

!["Screenshot of Edit Appointment"](https://github.com/hyjin123/scheduler/blob/master/docs/Edit-Form.png?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8000/>.
4. Fork and Clone <https://github.com/lighthouse-labs/scheduler-api> into a new directory and follow the README.md instructions to configure and run the API Server.
5. Start the API server using `npm start` command. This should be done under the new directory that you cloned the scheduler-api in. API Server must run concurrently with the webpack development server for this Application to work.

## Setup

- Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running API Server

```sh
npm start
```

- This should be done under the new directory that you cloned the scheduler-api in. API Server must run concurrently with the webpack development server for this Application to work.

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies

- Axios
- @testing-library/react-hooks
- React-test-renderer
