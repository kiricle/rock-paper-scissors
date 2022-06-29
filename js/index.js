import Game from './game';
import Display from './display'
import '../scss/styles.scss';
import Computer from './computer';

const myGame = new Game(new Display(), new Computer());

myGame.onLoad();