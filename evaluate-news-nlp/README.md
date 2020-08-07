# Evaluate News NLP

## Table of Contents

* [Description](#Description)
* [Requirement](#Requirement)
* [Important Files](#Important Files)
* [How To Run](#How To Run)



## Description

This a 'Evaluate news NLP' code which used for Udacity Course in the fourth project, it's purpose is to learn and practice about using Webpack and it's configurations alongside JavaScript projects, also introduce new concept like 'sass' styling and testing functionality of Javascript functions using 'jest'.
it demonstrate client-server in javascript with external api, by accepting input from user then sending it to the server, and then using the input for the api endpoint to receive the response the display it in the website.



## Requirement

1. it require modern browser such as Chrome, Firefox etc.
2. terminal to run the local server
3. Dependencies.
4. your own API Key and ID, can acquire the Key and ID by registering here https://developer.aylien.com/signup  

## Dependencies

1. aylien_textapi
2. body-parser
3. cors
4. dotenv
5. express
6. webpack
7. webpack-cli
8. babel/core + babel/preset-env + babel-loader
9. clean-webpack-plugin
10. css-loader
11. html-webpack-plugin
12. jest
13. mini-css-extract-plugin
14. node-sass
15. optimize-css-assets-webpack-plugin
16. sass-loader
17. style-loader
18. terser-webpack-plugin
19. webpack-dev-server
20. workbox-webpack-plugin



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
2. use the browser enter the URL: http://localhost:8081/
3. enter URL (website link) for the api to analyze, submit, wait for form result.