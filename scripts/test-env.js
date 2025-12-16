const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envPath = path.join(__dirname, '../.env.local');
console.log('Testing env load from:', envPath);

if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    console.log('Content preview:', content.substring(0, 50).replace(/\n/g, '\\n'));

    const config = dotenv.parse(content);
    console.log('Parsed Keys:', Object.keys(config));
    console.log('DB_HOST:', config.DB_HOST);
} else {
    console.error('File not found');
}
