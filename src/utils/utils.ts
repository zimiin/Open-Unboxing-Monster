export const parseDate = (date: Date) => {
  const fullYear = date.getFullYear()
  const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

  return fullYear + '.' + month + '.' + day + '  ' + hours + ':' + minutes + ':' + seconds
}

export const generateProbability = (
  itemPrices: number[],
  boxPrice: number,
  alpha = 0.5,
): number[] => {
  const semiProbabilities = [];
  let baseProb = 1;
  boxPrice = boxPrice * 1.03;

  for (let i = 0; i < itemPrices.length; i++) {
    let prob;
    if (itemPrices[i] === itemPrices[itemPrices.length - 1]) {
      prob = baseProb;
      baseProb -= prob
    }
    else {
      const remain = itemPrices.slice(i + 1);
      const nextBoxPrice =
        alpha * Math.min(remain[0], boxPrice) +
        (1 - alpha) * remain[remain.length - 1];

      const p = (boxPrice - nextBoxPrice) / (itemPrices[i] - nextBoxPrice);
      prob = baseProb * p;
      baseProb -= prob;
      boxPrice = nextBoxPrice;
    }
    semiProbabilities.push(prob);
  }

  const counter: { [keys: number]: number } = {};
  const prob: { [keys: number]: number } = {};

  for (let i = 0; i < itemPrices.length; i++) {
    const price = itemPrices[i];
    const sProb = semiProbabilities[i];

    if (counter[price]) {
      counter[price] += 1;
      prob[price] += sProb;
    } else {
      counter[price] = 1;
      prob[price] = sProb;
    }
  }

  return itemPrices.map((price) => {
    return prob[price] / counter[price];
  });
}