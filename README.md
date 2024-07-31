# End to End Project

This application allows the user to access and manipulate a database of countries and people.

## How To Run

You can access this file via running 'npm install' in your terminal(i.e. Gitbash, Powershell etc.) and viewing it on your local server (http://localhost:(portnumber))
You also need to create a .env file and set a port for yourself in this format
"PORT=(choose a port number)"

For example if my chosen port number is 3000 my .env will look like this:
PORT=3000

And my local server will be:
http://localhost:3000

## How to Setup and Run the Database

You will also need to create your own SQL database (I recommend Supabase.com) and connect the URL given to the project in your .env file, after setting the port above.
"DB_URL=(Add your URL here)"

Once you have completed your installation and added your URL to your .env file you need to run 'npm run setup-db' in your teminal(i.e. Gitbash, Powershell etc.) to seed the data into your new SQL database.

## How to Run the Server

If everything has been set up you can run the server to access the database information and use the API successfully. You need to run 'npm run dev' in your teminal(i.e. Gitbash, Powershell etc.) so that your server can start running in the background. The server will continously run until stopped, so if you need to access the terminal again after running the server, you can stop running the server using CTRL + C. Please remember to restart the server whenever you need it back up.


## Avaliable Options

You can access all of the countries by name by accessing http://localhost:(port number)/countries
You can access a specific country by entering the name after /countries - i.e. http://localhost:(port number)/countries
You can create a specific country by using countries.create within your API.
You can update a specific country by using countries.update within your API.
You can delete a specific country by using countries.destroy within the API.