# Phase-3-Project: Simple student database application
 
 ## Objectives of this Project
    1. Create a Full-Stack application that includes React Js frontend and Sinatra backend.
    2. It must be able to perform CRUD through GUI (Graphical User Interface)
    3. The backend should include at least 2 models.

### About this project
For this project, I have decided to create a simple student database app using React frontend and Ruby Sinatra backend.
I figured that it would be useful for me later on since I work at a middle school as a part-time IT tech.
Here's my simple looking graphical user interface created with React framework.
![image](https://user-images.githubusercontent.com/64029918/158064332-a01d89a8-c376-400b-b827-bddddc1583a7.png)
The top of the application contains a form component where users can type and submit new student data to my sinatra backend database.
I used active record gem to create connections between different class models: students, schools.

![image](https://user-images.githubusercontent.com/64029918/158064637-bec31b58-22a8-4933-8112-10fe505d151c.png)
![image](https://user-images.githubusercontent.com/64029918/158064647-29ebe9d2-b4fd-4e36-b6dc-7b920af11f43.png)

Since schools have many students, I created a one to many relationships between two of the models.

###
