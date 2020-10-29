function solution(cacheSize, cities) {
  const cache = [];
  return cities.reduce((execTime, city) => {
    const cityLower = city.toLowerCase();
    const cacheI    = cache.indexOf(cityLower);
    if(cacheI === -1) {
      cache.push(cityLower);
      if(cache.length > cacheSize) cache.shift();
      return execTime + 5;
    }
    else {
      const hitCity = cache.splice(cacheI, 1)[0];
      cache.push(hitCity);
      return execTime + 1;
    }
  }, 0);
}
