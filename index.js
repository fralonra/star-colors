const fs = require('fs');

const raw = fs.readFileSync('./raw').toString();
const data = {};

const lines = Array.from(raw.split('\n'));
lines.forEach(l => {
  const tmp = l.trim().split(/\s+/);
  const type = tmp[0];
  const r = tmp[3];
  const g = tmp[4];
  const b = tmp[5];
  const hex = tmp[6];
  data[type] = {
    class: type,
    r,
    g,
    b,
    hex
  };
});

fs.writeFileSync('./data.json', JSON.stringify(data));
