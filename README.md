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

## Installing the Database

You will also need to create your own SQL database (I recommend Supabase.com) and connect the URL given to the project in your .env file, after setting the port above.
"DB_URL=(Add your URL here)"

## Avaliable Options

You can access all of the countries by name by accessing http://localhost:(port number)/countries
You can access a specific country by entering the name after /countries - i.e. http://localhost:(port number)/countries
You can create a specific country by using countries.create within your API.
You can update a specific country by using countries.update within your API.
You can delete a specific country by using countries.destroy within the API.