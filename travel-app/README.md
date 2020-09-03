# Travel App

## Table of Contents

* [Description](#Description)
* [Requirement](#Requirement)
* [Dependencies](#Dependencies)
* [Important Files](#Important Files)
* [How To Run](#How To Run)





## Description

This a 'Travel-app' code which used for Udacity Course for the Fifth project, and it's purpose is to apply all knowledge learned before from the previous projects and more.
the page receive input from the user then use the input for 'API' to acquire the desired output using the user input and other API



## Requirement

1. it require modern browser such as Chrome, Firefox etc.
2. terminal to run the local server
3. Dependencies.
4. node.js express



## Dependencies

"@babel/core": "^7.11.5",

"@babel/plugin-transform-regenerator": "^7.10.4",

"@babel/plugin-transform-runtime": "^7.11.5",

"@babel/preset-env": "^7.11.0",

"@rollup/plugin-babel": "^5.2.0",

"babel-loader": "^8.1.0",

"clean-webpack-plugin": "^3.0.0",

"css-loader": "^4.2.1",

"friendly-errors-webpack-plugin": "^1.7.0",

"html-webpack-plugin": "^4.3.0",

"jest": "^26.4.2",

"mini-css-extract-plugin": "^0.10.0",

"node-sass": "^4.14.1",

"optimize-css-assets-webpack-plugin": "^5.0.3",

"sass-loader": "^9.0.3",

"style-loader": "^1.2.1",

"superagent": "^6.1.0",

"supertest": "^4.0.2",

"terser-webpack-plugin": "^4.1.0",

"webpack": "^4.44.1",

"webpack-cli": "^3.3.12",

"webpack-dev-server": "^3.11.0",

"workbox-webpack-plugin": "^5.1.3"

 "@babel/runtime": "^7.11.2",

 "body-parser": "^1.19.0",

 "cors": "^2.8.5",

 "express": "^4.17.1"



## Important Files

The project Consist of three important files, 

- src: contain the source codes for JS, HTML, CSS.
- dist: optimized source file for production mode build
- node modules: Dependencies files
- _ _test_ _ : contain test files for testing JavaScript functions
- configuration files: webpack.dev => development mode configuration
      webpack.prod => production mode configuration



## How To Run

1. run the server using the terminal `node src/server/server.js`
2. use the browser enter the URL: http://localhost:3000/
3. Go to URL (website link) ,enter the input then submit, wait for the result.