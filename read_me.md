This project is a demonstration for the working of login authentication system using Google Firebase.

Using Google Firebase Auth application you can create and manage a database of users which are allowed to access a particular url without having prior knowledge of DBMS.

All you need to do is replace the 'api key values' of your project with the ones given in the Angular files of this repository.

In this project, the file test_page.html is the page which will be accessible to only those users which are present in my firebase database.

The page will be accessible only when a user enters the correct email-id and password in the firebase_login_page.html page else if the wrong information is entered or the user tries to access test_page.html without logging in then they will be automatically redirected back to the firebase_login_page.html path.

An auto logout function is set through Angular which will allow access to test_page.html path only for a specified interval of time.A warning message will be displayed before loggin out the user for a specified time.These specified time intervals can be changed through Angular.