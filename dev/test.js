const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
bitcoin.createNewBlock(09823, 'ALKDJSHF09283', 'ADSLKJF38247');
bitcoin.createNewTransaction(100, 'HEYSKJH78342059', 'YOPOFYEHW89437');
bitcoin.createNewBlock(2039478, 'SDFJH209384', 'WOEIRUSJHKDF');

bitcoin.createNewTransaction(50, 'HEYSKJH78342059', 'YOPOFYEHW89437');
bitcoin.createNewTransaction(2000, 'HEYSKJH78342059', 'YOPOFYEHW89437');
bitcoin.createNewTransaction(10, 'HEYSKJH78342059', 'YOPOFYEHW89437');

bitcoin.createNewBlock(2039473, 'SDFJHsdf209384', 'WOEsdfRUSJHKDF');

console.log(bitcoin.chain[2]);
// new
