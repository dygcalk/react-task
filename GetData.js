import getData from './App.js';

(async () => {
  const result = await getData(1);
  console.log(result);
})();
