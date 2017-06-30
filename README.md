#######Drag and Drop Profile App with user sign-in/signup features###################

### Application Setup

# npm install - To install all npm packages
# npm start - To start the application
# npm rum bundle - will transpile es6 code to es5

### Technology used:

# User authentication is done using passport npm packages
# Used ES6/ES2015 javascript feature through the application
# For transpiling ES6 code used babel
# Created Presentational Component in client react app
# Used react-dnd package for implementing drag and drop functionality
# For server side implementation used express web framework
# Created different middlewares for authenitcating users

## Application Flow

# When user will come to http://localhost:3000 URL, user will see a default home page
# Here user have option to Login/signup
# After user is signup, user can use the same email id for login
# once user is successfully authenticated, it will be redirected to Profile Dashboard page
# On profile dashboard app user can edit the exsiting profiles, by clicking on edit Link
# Here, user can drag different profiles between list 1 and 2


### TODO - This application can be extended by adding following features

# Actual Profile page can show all the users which are signed up for this application, right now Dashboard Profile page displays static users list

#Roles Authorization can be implemented to allow users to see profiles related to them
