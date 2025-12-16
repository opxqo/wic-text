import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
    try {
        const [rows] = await pool.query('SELECT count FROM school_stats WHERE id = 1');
        // @ts-ignore
        const count = rows[0]?.count || 0;

        // Add random variation to mock "live" updates if needed, 
        // but user asked for "Real" stats from DB.

        return NextResponse.json({ count });
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }
}

export async function POST() {
    try {
        // Increment the counter
        await pool.query('UPDATE school_stats SET count = count + 1 WHERE id = 1');

        const [rows] = await pool.query('SELECT count FROM school_stats WHERE id = 1');
        // @ts-ignore
        const count = rows[0]?.count || 0;

        return NextResponse.json({ count });
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ error: 'Failed to update stats' }, { status: 500 });
    }
}
