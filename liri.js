const twitKeys = require('./keys.js');
const request = require('request');
const Twitter = require('twitter');
const client = new Twitter({
    consumer_key: 'mc7VJY2mEPeDLLNEycmLKwNHU',
    consumer_secret: 'I90RMKvXjSECBIHGuXDqWexnGco9CdyB2LOFEyitCIozziLGzh',
    access_token_key: '888545092402917379-8pBTYkGIAy3d3SXb8EKHViZW4cXEdWU',
    access_token_secret: 'eO2KQxbJAe4aR2Mqe7EiC0GUsnz5CvrZfVe5buHZQC7vX'
});


const argv = require('yargs')
    .command('my-tweets', 'fetches tweets', function (yargs) {
        yargs.options({

        }).help('help');

        var params = {screen_name: 'zombies_4_sale' };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                var myTweets = tweets;
                myTweets.forEach(function(element) {
                    console.log(element.text);
                }, this);
            }
        });



    })
    .command('movie-this', 'fetch movie', function (yargs) {
        yargs.options({

        }).help('help');
        console.log("my movie!");

    })
    .command('spotify-this-song', 'song info', function (yargs) {
        yargs.options({

        }).help('help');
        console.log("my songsz!!");
    })
    .command('do-it', 'does it', function (yargs) {
        yargs.options({

        }).help('help');
        console.log("my doing thing!");
    })
    .help('help')
    .argv;




var command = argv[0];


//my-tweets
// spotify-this-song
// movie-this
// do-what-it-says