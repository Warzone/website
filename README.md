## Website

This site is built using ReactJS. This ties with Warzone's [TGM](https://github.com/WarzoneMC/Warzone) project to display multiple leaderboards, individual players stats, as well as detailed stats on each game played and the in-depth stats of each game.

## Website Setup

1. Get the [api](https://github.com/WarzoneMC/api and a server connected to the api running the [TGM](https://github.com/WarzoneMC/Warzone) plugin setup and running correctly. The api is what the website communicates with to get the stats of the players.

2. Make sure you have node.js setup on the server. Type ``npm install`` in the root folder of the node app to install all of the website's required dependencies.

3. Create a ``config.json`` and include all needed information such as the port to run the webserver on.

4. Run the app by typing ``node app.js`` in the ``src`` folder or by typing ``pm2 start app.js`` if you are using PM2.

## Other Contributors

- [JackJack33](https://github.com/JackJack33) - provided jumbotron image
