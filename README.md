# Perspective

![Perspective](/images/AvocatiLink.png)

*By Amber Bancroft- [Visit Perspective](https://app-perspective.herokuapp.com/)*

**Table of Contents**
* [Welcome to Perspective](#welcome-to-perspective)
* [Technologies Used](#technologies-used)
* [MVP Feature List](#mvp-feature-list)
* [Application Architecture](#application-architecture)
* [Database Schema](#database-schema)
* [Frontend Overview](#frontend-overview)
* [Backend Overview](#backend-overview)
* [Conclusion](#conclusion)

## Welcome to Perspective
Perspective (a [Flickr](https://flickr.com/) clone) is a platform for users to to express themselves and bond with others through the art of photography while also being able to manage portfolios. On our full-stack application, users can post their own photos and albums so that any other Perspective user can view the artists work.


## Technologies Used
* Frontend
    * Javascript
    * React
    * Redux
    * CSS
* Backend
    * Node.js
    * Express.js
    * PostgreSQL
    * Heroku Deployment

## MVP Feature List
* User Authentification
    * Sign Up/ Login
        
        Users have the ability to sign up for an account by inputing the requested credentials.
        
        ![Sign Up/Login](/images/AvocatiLoginSignUp.gif)
    * Demo User
        
        Upon arriving on the splashpage, users have the option to click the "Demo" button to be instantly logged in as the default demo user. This demo account allows them to navigate the application and all of it's authenticated features without formally creating their own account.
        
        ![Demo User](/images/AvocatiDemoExample.gif)
* Photos
    * Uploading Photos
        
        Authenticated users can upload their own photos, allowing other users to browse their work. To post a stpry, you will be prompted to input a title and an image file.
        
        ![UploadingPhoto](/images/WriteThings.gif)
    * Editing Photos
    
      Authenticated users can edit the photos they have posted by clicking the edit button. They will then be allowed to edit the title of the desired photo.
      
      ![EditPhoto](/images/AvocatiEdit.gif)
    * Deleting Photos

      Authenticated users can delete the photos that they've posted by clicking the delete button. They will then be allowed to delete the desired photo.
      
      ![DeletePhoto](/images/AvocatiDelete.gif)


## Application Architecture

### Database Schema
![Database](/images/DatabaseSchema.png)

### Frontend Overview
The Perspective frontend was built entirely with vanilla JavaScript and CSS. We used a combination of form inputs and the Fetch API to provide a fully functional CRUD experience to our users. By utilizing Ajax we are also able to provide a seamlessly integrated experience to our users when they make comments, like stories, or follow other users.

### Backend Overview
The Express backend is a collection of frontend routes and RESTful API routes that serve data to the frontend through React/Redux. The application data is stored in a Postgres database. All backend CRUD operations are performed through our Node environment with Sequelize.

## Conclusion
