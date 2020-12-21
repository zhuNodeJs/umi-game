const herolist = require('./herolist.json');
const item = require('./item.json');
const summoner = require('./summoner.json');
const ming = require('./ming.json');

export default {
  '/api/herolist.json': herolist,
  'POST /api/herodetails.json': (
    req: { body: { ename: any } },
    res: { send: (arg0: any) => void },
  ) => {
    const { ename } = req.body;
    const hero = herolist.filter(
      (hero: { ename: number }) => hero.ename === parseInt(ename, 10),
    )[0];
    res.send(hero);
  },
  '/api/item.json': item,
  '/api/summoner.json': summoner,
  '/api/ming.json': ming,
  'POST /api/freeheros.json': (req: any, res: any) => {
    const { number } = req.body;
    function getRandomArrayElements(arr: [], count: number) {
      var shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        index,
        temp;
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      return shuffled.slice(min);
    }
    const freeheros = getRandomArrayElements(herolist, number);
    res.send(freeheros);
  },
};
