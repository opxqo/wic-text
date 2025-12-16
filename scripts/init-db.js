const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// Load environment variables from .env.local
// Note: dotenv doesn't automatically look for .env.local, usually next.js does.
// We will manually specify or just run this with env vars if needed.
// For simplicity in this script, we'll try to read .env.local if .env doesn't exist, 
// or just rely on the user running it correctly. 
// Given the environment, let's just hardcode the logic to read .env.local since we just created it.

const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '../.env.local');
console.log('Reading env from:', envPath);
if (fs.existsSync(envPath)) {
    const fileContent = fs.readFileSync(envPath, { encoding: 'utf8' }); // Force UTF-8
    console.log('File content length:', fileContent.length);
    const envConfig = dotenv.parse(fileContent);
    for (const k in envConfig) {
        process.env[k] = envConfig[k];
    }
    console.log('Loaded env keys:', Object.keys(envConfig));
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_USER:', process.env.DB_USER);
} else {
    console.error('Env file not found at:', envPath);
}

async function initDB() {
    console.log('Connecting to DB...');
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT || '3306'),
        ssl: { rejectUnauthorized: false }
    });

    try {
        console.log('Creating table school_stats if not exists...');
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS school_stats (
                id INT PRIMARY KEY,
                count INT DEFAULT 0
            ) 
        `);

        console.log('Initializing counter if empty...');
        const [rows] = await connection.execute('SELECT * FROM school_stats WHERE id = 1');

        if (rows.length === 0) {
            await connection.execute('INSERT INTO school_stats (id, count) VALUES (1, 0)');
            console.log('Initialized count to 0.');
        } else {
            console.log('Counter already exists. Current count:', rows[0].count);
        }

        console.log('Database initialization complete.');

    } catch (error) {
        console.error('Error initializing DB:', error);
    } finally {
        await connection.end();
    }
}

initDB();
