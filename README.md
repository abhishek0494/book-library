
# BookLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server
**Run The Client**
 - Clone The repository.
 - Install the dependencies using **npm install.**
 - Go to project folder **(cd book-library).**
 - Build the application using command **ng build --prod --aot**
 - Run the application using **node startClient.js**.

**Run The Server**

 - Run the server using **node server.js**

**Note :- Client and server should run in two separate terminal from the project root directory.**

## Code scaffolding

**Components (src/app/components)**

 - **books/books.component.ts**- This component contains the code for listing the books.
 - **navbar/navbar.component.ts**- This component contains the code for **navbar and global search** . To search anything enter the search text and hit enter and to remove filter simply click on the cross icon.
 - **bookform/bookform.component.ts**- This component contains the code for the form component to add new books.
 - **categories/categories.component.ts**- This component contains the code to display the categories ad help user to filter based on categories.

**Services(src/app/service)**
**Http-interceptor service**- This service is used to add the base-url for the server endpoint.The server url is taken from **src/environment/environment and src/environment/environment** depending on the app running on development or production mode.
**bookservice.service.ts**-This service contains the http api request to server to GET and POST data from server.

**Store(src/app/store)**

 - **Action:** This file contains the action interface.
 - **Reducer**: This file contains the reducer code.
 - **Effects**:This contains the code to new source of action to reduce state based on external api request.

**Model(src/app/model)**
 - **book.model.ts**- This contains the model of the book.

**src/startClient.js**
This is the web server to serve the build angular files.

**src/server.js**
This is where the node express server code is written along with the endpoints.
