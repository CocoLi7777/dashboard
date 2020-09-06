# Dynamic Data Dashboard

## Content

- [Introduction](#introduction)
- [Live Demo](#live-demo)
- [Details](#details)
  - [Information displayed](#information-displayed)
  - [Highlights](#highlights)
  - [Performance Optimization](#performance-optimization)
  - [Run locally](#run-locally)
- [FAQ](faq)
  ​

## Introduction

This project is to build an analytics dashboard and provide visualizing COVID-19 data related to Western Australia and Victoria.

The tasks are:

1. Consume an API from the community and get JSON data from CSV file.
2. Aggregate and group data of everyday and get monthly data of recoveries numbers for Western Australia and Victoria.
3. Display the data in dashboard and also show each state's local time at time of loading the dashboard.

## Live Demo

This application is deployed to Heroku, here is the [link](https://c19-trending.herokuapp.com/)
​

## Details:

### Information displayed

- Data trending in overall 2020
- From January to December numbers of recovery displaying by each state
- Each state local time at time of loading the dashboard
  ​

### Highlights

- Vanila JavaScript instead of framework to reduce the script size and for the performance.
- Getting data from third-party API service and updating dashboard automatically.
- Using [csvjson](https://csvjson.com/) to convert data formats.
- Using [Chart.js](https://www.chartjs.org/) to visualize the data.
- Responsive UI using [Bulma](https://bulma.io/), mobile friendly.
- Date format and timezone using [Momont](https://momentjs.com/).
- Setup Continuous Deployment using Github and [Heroku](https://www.heroku.com/), having continuously improvement to the application.

### Performance Optimization

​

### Run locally

Pure front-end application with vanilla JavaScript, no need to setup the server, any http server can host the application or it can be run directly in browser.
For local development, recommend [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## FAQ
