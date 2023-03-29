# Share Tech

CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## Table of Contents

- [Description](#description)
- [Aims](#aims)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Licenses](#licenses)
- [Features](#features)
- [Contributing](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Description

CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## Aims

- GIVEN a CMS-style blog site
- WHEN I visit the site for the first time
  THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option
  THEN I am taken to the homepage
- WHEN I click on any other links in the navigation
  THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up
  THEN I am prompted to create a username and password
- WHEN I click on the sign-up button
  THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in
  THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
  THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation
  THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post
  THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in
  THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation
  THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post
  THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post
  THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard
  THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation
  THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time
  THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Installation
1. In the file .env.EXAMPLE remove "EXAMPLE" part and keep file name as .env, overwrite variables to connect to your databaseю
2. Just instal NPM package run in terminal "npm install"
3. Then you need to seed your data base, run in terminal  "node .\seeds\seeds.js"

## Usage

After NPM installation type in terminal "node .\server.js"

## Tests

A manual test was carried out, no errors were found.

## Licenses

This project is covered under the MIT license. To learn more about what this means, click the license button below.

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

## Features

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

[![MySQL](https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg)](https://dev.mysql.com/doc/)

[![npm Express.js](https://img.shields.io/badge/npm-Express.js-lightgrey.svg)](https://expressjs.com/)

[![npm Inquirer.js](https://img.shields.io/badge/npm-Inquirer.js-orange.svg)](https://www.npmjs.com/package/inquirer)

## Deployment

[GitHub Repo](https://github.com/RufatEskendarov/Share-Tech)

[Heroku app URL](https://share-tech.herokuapp.com/)

## Contribution

Please contact via LinkedIn or Email

## Questions

Have questions about this project?  
GitHub: https://github.com/RufatEskendarov  
Email: rufat.eskendarov@gmail.com  
LinkedIn: https://www.linkedin.com/in/rufat-eskendarov/

### ©️2023
