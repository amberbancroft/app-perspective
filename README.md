# Perspective

![Perspective](frontend/src/components/SplashPage/images/splashpage.png)

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
    * Material-Ui
    * CSS
* Backend
    * Node.js
    * Express.js
    * PostgreSQL
    * AWS
    * Heroku Deployment

## MVP Feature List
* User Authentification
    * Sign Up/ Login
        
        Users have the ability to sign up for an account by inputing the requested credentials.
        
        ![Sign Up/Login](https://user-images.githubusercontent.com/77598204/135176306-0cdfcc62-a601-45ae-8e85-4213af5f927d.gif)
    * Demo User
        
        Upon arriving on the splashpage, users have the option to click the "Demo" button to be instantly logged in as the default demo user. This demo account allows them to navigate the application and all of it's authenticated features without formally creating their own account.
        
        ![Demo User](https://user-images.githubusercontent.com/77598204/135175508-ddb1c3a5-d8a9-4889-9921-3616506b6d44.gif)
* Photos
    * Uploading Photos
        
        Authenticated users can upload their own photos, allowing other users to browse their work. To post a story, you will be prompted to input a title and an image file.
        
        ![UploadingPhoto](https://user-images.githubusercontent.com/77598204/135177742-1c2e841e-25fe-4ca6-81c5-458beb0211c9.gif)
    * Editing Photos
    
      Authenticated users can edit the photos they have posted by clicking the edit button. They will then be allowed to edit the title of the desired photo.
      
      ![EditPhoto](https://user-images.githubusercontent.com/77598204/135178274-89a41f97-a6c4-4088-9926-e942c43057c2.gif)

    * Deleting Photos

      Authenticated users can delete the photos that they've posted by clicking the delete button. They will then be allowed to delete the desired photo.
      
![DeletePhoto](https://user-images.githubusercontent.com/77598204/135180252-9232328c-4a8a-47e1-b9d8-042f16c5e6e6.gif)


## Application Architecture

### Database Schema
![Database](https://i.ibb.co/3RGTLWD/Screen-Shot-2021-05-20-at-2-12-49-PM.png)

### Frontend Overview
The Perspective frontend was built entirely with vanilla JavaScript and CSS. We used a combination of form inputs and the Fetch API to provide a fully functional CRUD experience to our users. By utilizing Ajax we are also able to provide a seamlessly integrated experience to our users when they make comments, like stories, or follow other users.

### Backend Overview
The Express backend is a collection of frontend routes and RESTful API routes that serve data to the frontend through React/Redux. The application data is stored in a Postgres database. All backend CRUD operations are performed through our Node environment with Sequelize. AWS was used to improve photo quality as well as help render images faster on the page to improve user experience.

## Conclusion
I intended to create a clone of Flickr which is a site where you can post photos and engage in the community like many other social media platforms. I strived for a clean minimal look with high functionality. I learned a lot on the process and look forward to improving our design in the future.
