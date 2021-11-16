# lucky-winner
A JS module for picking K random names from an array of N names.

where 1<=K<=N

# Install
```javascript
npm i lucky-winner
```

# Usage
```javascript
const luckyWinner = require('lucky-winner');
// luckyWinner(names,K=1) names:array and K:integer
console.log(luckyWinner(['pavan','chikkanna','gowda'])) // returns one random name.
console.log(luckyWinner(['pavan','chikkanna','gowda'],2)) // returns two random names
console.log(luckyWinner(['pavan','chikkanna','gowda'],3)) // returns three random names
console.log(luckyWinner(1)) // throws error
```