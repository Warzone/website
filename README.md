# League.gg
Stunning league name checker

## Server Configuration
Each server instance should have a `config.json` file.
```
{
  "port": 3000,
  "mongo": "mongodb://user:password@localhost/leaguegg"
}
```

## Noteworthy Modules Used
1. https://github.com/claudiowilson/LeagueJS

## Riot Rate Limiting
```
500 requests every 10 minutes
10 requests every 10 seconds
```

## Riot Summoner Response
```
{"luuke": {
   "id": 40160372,
   "name": "Luuke",
   "profileIconId": 654,
   "revisionDate": 1489341544000,
   "summonerLevel": 30
}}
```
