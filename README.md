# NHL stats
An app that queries NHL teams and team statistics using the statsapi. 


### API Snippet

~~~
{
  "copyright" : "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved.",
  "stats" : [ {
    "type" : {
      "displayName" : "statsSingleSeason",
      "gameType" : {
        "id" : "R",
        "description" : "Regular season",
        "postseason" : false
      }
    },
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
      },
      "team" : {
        "id" : 3,
        "name" : "New York Rangers",
        "link" : "/api/v1/teams/3"
      }
    } ]
  }, {
    "type" : {
      "displayName" : "regularSeasonStatRankings",
      "gameType" : null
    },
    "splits" : [ {
      "stat" : {
        "wins" : "6th",
        "losses" : "9th",
        "ot" : "28th",
        "pts" : "8th",
        "ptPctg" : "8th",
        "goalsPerGame" : "16th",
        "goalsAgainstPerGame" : "2nd",
        "evGGARatio" : "14th",
        "powerPlayPercentage" : "4th",
        "powerPlayGoals" : "9th",
        "powerPlayGoalsAgainst" : "6th",
        "powerPlayOpportunities" : "28th",
        "penaltyKillOpportunities" : "14th",
        "penaltyKillPercentage" : "7th",
        "shotsPerGame" : "28th",
        "shotsAllowed" : "11th",
        "winScoreFirst" : "9th",
        "winOppScoreFirst" : "6th",
        "winLeadFirstPer" : "6th",
        "winLeadSecondPer" : "12th",
        "winOutshootOpp" : "10th",
        "winOutshotByOpp" : "10th",
        "faceOffsTaken" : "32nd",
        "faceOffsWon" : "31st",
        "faceOffsLost" : "8th",
        "faceOffWinPercentage" : "24th",
        "savePctRank" : "1st",
        "shootingPctRank" : "8th"
      },
      "team" : {
        "id" : 3,
        "name" : "New York Rangers",
        "link" : "/api/v1/teams/3"
      }
    } ]
  } ]
}
~~~
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

### Features
Search for teams using the search bar
Filter teams by conference or division