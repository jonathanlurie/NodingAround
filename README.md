# NodingAround
Nodejs pieces of code, tests and tutorials.

## ExpressAjax
Starting from [Pete Cooper](https://github.com/petecoop)'s Yeoman [Express generator](https://github.com/petecoop/generator-express), this is a simple test of Ajax requesting (from client side).

```shell
$ cd ExpressAjax
$ npm install
$ gulp
```

Then, Ajax requests are at `http://localhost:8080/page`, and the target files are:
- `app.js`: calls the page route
- `routes/page.js`: defines the route
- `views/page.handlebars`: simple handlebars template
- `public/js/page_script.js`: defines the button callback for making Ajax requests to server


The **first button** just asks the server to retrieve some data, while the **second button** sends data to the server and asks and appropriate answer.
