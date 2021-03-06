# COVID-19 Recoveries Dashboard

## Content

- [Introduction](#introduction)
- [Live Demo](#live-demo)
- [Details](#details)
  - [Information displayed](#information-displayed)
  - [Highlights](#highlights)
  - [What's still going on...](#what's-still-going-on...)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Running locally](#running-locally)
  ​

## Introduction

This project is to build an analytics dashboard and provide visualizing COVID-19 data related to Western Australia and Victoria.

The tasks are:

1. Consume an API from the community and get JSON data converting from CSV.
2. Aggregate and group data of everyday to get monthly data of recoveries numbers for states of Western Australia and Victoria.
3. Display the data in dashboard and also show each state's local time at time of loading the dashboard.

## Live Demo

This application is deployed to Heroku, here is the [link](https://c19-recovery.herokuapp.com/)
​

## Details:

### Information displayed

- Data trending in overall 2020
- From January to December numbers of recovery displaying by each state
- Each state local time at time of loading the dashboard
  ​

### Highlights

- Vanila JavaScript in the front-end instead of framework to reduce the script size and for the performance.
- Getting data from third-party API service and updating dashboard automatically.
- Using [csvjson](https://csvjson.com/) to convert data formats.
- Using [Chart.js](https://www.chartjs.org/) to visualize the data.
- Responsive UI using [Bulma](https://bulma.io/), mobile friendly.
- Date format and timezone using [Momont](https://momentjs.com/).
- Loading animation solution using only HTML & CSS.
- Setup Continuous Deployment using Github and [Heroku](https://www.heroku.com/), having continuously improvement to the application.

### What's still going on...

I'm creating local file system cache just in case the third-party API failure. This is back-up plan for better
user experience.

​

## Prerequisites

1. Node.js - Download and Install Node.js. You can also follow this gist for a quick and easy way to install Node.js and npm

2. NPM - Install NPM for all dependencies both in server and client.

## Quick Start

Install dependencies for server :
npm install

## Running locally

Run the client & server :
npm start
