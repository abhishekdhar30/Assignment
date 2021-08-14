

Assignment

[(https://assginment.herokuapp.com/)](https://assginment.herokuapp.com/)

-------------------------------


To Use

------
Make sure Node.js is installed in your system. If its not, kindly refer [here](https://nodejs.org/en/download/) to install for your OS.

You can download this project or git clone it by running from your terminal:

```
git clone https://github.com/abhishekdhar30/Assignment
```

Make sure that you are in the project folder:

```
ls
```

should yield you :
```
backend  frontend  package.json  package-lock.json  Procfile  README.md
```


Once it's downloaded, install all the dependencies for backend, by:
```
npm i
```

To install all the dependencies for frontend:
```
cd frontend
npm i
cd ..
```

Create .env file by:
```
  mkdir .env
```
Append these details to .env file:
```
NODE_ENV = development
PORT = 5000
MONGODBURL = 'YOUR MONGO URI STRING'
JWT_SECRET = ANY_SECRET_ALPHANUMERIC_STRING
DATABASE_ID='YOUR_ID'
DATABASE_PASSWORD='YOUR_PASSWORD'
```

Now, that the node modules are installed.


We can now start the dev server (concurrenctly, client & server) by running:
```
npm run dev
```


Technologies used:

-------------

MongoDB<br/>
Express.js<br/>
React.js<br/>
Node.js<br/>


