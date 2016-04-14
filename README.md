# Conway's Game of life in Electron

## Why

Because I wanted to...

Yes, I know I could have done this with Canvas or other web techs but I wanted to see if I could do it with Angular. I also know that this isn't the most "Angular"/"Electron" way but again this was a pet project for me to have fun with.

## Rules

Here are the rules as discussed on the [Wikipedia Page about Conway's Game of Life][wiki_conway]
- Any live cell with fewer than two live neighbours dies, as if caused by under-population.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by over-population.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


## Running

```npm start``` is the main command I use to run this application. It does two things. First it runs ```gulp build``` then ```electron main.js``` to actually start the electron application

## Developing

To run in development mode(dev tools and some additional logging) use ```npm run dev```


[wiki_conway]: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life