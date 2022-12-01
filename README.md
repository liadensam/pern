# PERN app with DOCKER 🎄

<br>

I followed [this tutorial](https://faun.pub/the-pern-stack-with-docker-for-beginners-9fa76e574d82) and based on that I created a table listing all the Icelandic 🇮🇸 Yule Lads 🎅🏼 with their date of coming. I added a bit of the Christamssy 🎄 look to it.

There is a Walkthrough at the end 👇 of thise Readme file (wait for the gifs to load).

<br>

<img src="/assets/app.png">

<br>

<br>

<img src="/assets/show.gif">

<br>
<br>


### My database data

<br>

<img src="/assets/postresql.png">

<br>

<br>

<img src="/assets/entries.png">

<br>


### Run it on your computer

_Note: if you have done Smari´s tutorial, then this should be easy for you_

<br>

- you need to have installed [Desktop Docker](https://www.docker.com/products/docker-desktop/) and connected with your PostreSQL.

<br>

- Clone the repository:


```sh
git clone https://github.com/liadensam/pern.git
```

<br>

- Go to the folder


```sh
cd pern
```

<br>

- Install all dependencies with:

```sh
npm install
```


<br>

- Run the backend on one terminal using:


```sh
node server.js
```

running on [http://localhost:5001](http://localhost:5001)

<br>
<br>

<img src="/assets/backend.png">

<br>


<br>

- Run the front-end on separate another terminal using:


```sh
npm start
```
<br>

- if you would like to display data you would need enivronment variables:
    - create `.env` file with and add your info: 


```sh
PGHOST=
PGUSER=
PGDATABASE=
GPASSWORD=
PGPORT=
```



- in order to display your data from a specific folder you need to change this part of code in `server.js` on the line **15** :

  `const data = await client.query('SELECT * from public.yulelads;')`

<br>

### Walkthrough

<br>

<img src="/assets/walkthrough.gif">

<br>
