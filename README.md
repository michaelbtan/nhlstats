# NHL stats
An app that queries NHL teams and team statistics using the statsapi. 


### API Snippet

> GET https://statsapi.web.nhl.com/api/v1/teams/1/stats

~~~
{
    "splits" : [ {
      "stat" : {
        "gamesPlayed" : 82,
        "wins" : 52,
        "losses" : 24,
        "ot" : 6,
        "pts" : 110,
        "ptPctg" : "67.1",
        "goalsPerGame" : 3.049,
        "goalsAgainstPerGame" : 2.488,
        "evGGARatio" : 1.0743,
        "powerPlayPercentage" : "25.2",
        "powerPlayGoals" : 55.0,
        "powerPlayGoalsAgainst" : 40.0,
        "powerPlayOpportunities" : 218.0,
        "penaltyKillPercentage" : "82.3",
        "shotsPerGame" : 29.1707,
        "shotsAllowed" : 30.8293,
        "winScoreFirst" : 0.829,
        "winOppScoreFirst" : 0.439,
        "winLeadFirstPer" : 0.857,
        "winLeadSecondPer" : 0.886,
        "winOutshootOpp" : 0.625,
        "winOutshotByOpp" : 0.633,
        "faceOffsTaken" : 4288.0,
        "faceOffsWon" : 2061.0,
        "faceOffsLost" : 2227.0,
        "faceOffWinPercentage" : "48.1",
        "shootingPctg" : 10.5,
        "savePctg" : 0.919
      }
~~~

> GET https://statsapi.web.nhl.com/api/v1/teams

~~~
{
            "id": 1,
            "name": "New Jersey Devils",
            "link": "/api/v1/teams/1",
            "venue": {
                "name": "Prudential Center",
                "link": "/api/v1/venues/null",
                "city": "Newark",
                "timeZone": {
                    "id": "America/New_York",
                    "offset": -4,
                    "tz": "EDT"
                }
            },
            "abbreviation": "NJD",
            "teamName": "Devils",
            "locationName": "New Jersey",
            "firstYearOfPlay": "1982",
            "division": {
                "id": 18,
                "name": "Metropolitan",
                "nameShort": "Metro",
                "link": "/api/v1/divisions/18",
                "abbreviation": "M"
            },
            "conference": {
                "id": 6,
                "name": "Eastern",
                "link": "/api/v1/conferences/6"
            },
            "franchise": {
                "franchiseId": 23,
                "teamName": "Devils",
                "link": "/api/v1/franchises/23"
            },
            "shortName": "New Jersey",
            "officialSiteUrl": "http://www.newjerseydevils.com/",
            "franchiseId": 23,
            "active": true
        },
~~~

### Component Heirchy

![Component Heirchy for NFL App](https://i.imgur.com/6Fps0bP.png)




### Features
1. Search for teams using the search bar
2. Filter teams by conference or division
3. Sort teams alphabetically
4. See team's stat rankings amongst broader league

### Acknowledgements
StatsAPI<br><br>
"NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved."