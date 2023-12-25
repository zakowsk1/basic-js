const { NotImplementedError } = require('../extensions/index.js');

/**
 * Returns an object with the appearances of DNS segments within an array of domains.
 *
 * @param {Array} domains The array of domains to analyze.
 * @return {Object} An object where keys are DNS segments and values are their counts.
 *
 * @example
 * getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])
 * // Output: { '.ru': 3, '.ru.yandex': 3, '.ru.yandex.code': 1, '.ru.yandex.music': 1 }
 */
function getDNSStats(domains) {
  const dnsStats = {};

  domains.forEach(domain => {
    const segments = domain.split('.').reverse();
    let currentSegment = '';

    for (const segment of segments) {
      currentSegment += '.' + segment ;
      dnsStats[currentSegment] = (dnsStats[currentSegment] || 0) + 1;
    }
  });

  return dnsStats;
}

module.exports = {
  getDNSStats
};
