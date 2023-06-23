import db from '../lib/prisma'

export async function fetchClub(email) {
    return (db).club.findUnique({
        where: {
            email,
        },
    });
}

export async function createClub(data) {
    return db.club.create({
        data,
    });
}