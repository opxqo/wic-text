const fs = require('fs');
const path = require('path');

const content = [
    'DB_HOST=175.178.102.49',
    'DB_PORT=30208',
    'DB_USER=root',
    'DB_PASSWORD=SnBLkH0YX6Oy5d127gclwf4Tet3u9za8',
    'DB_NAME=zeabur'
].join('\n');

const filePath = path.join(__dirname, '../.env.local');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Written clean .env.local to:', filePath);
