import db from '../lib/prisma'

export async function fetchRooms() {
    return db.room.findMany({
        select: {
            id: true,
            blockName: true,
            roomNumber: true,
        },
    });
}

export async function createRoom(data) {
    return db.room.create({
        data,
    });
}

export default function createAvailableRooms(data) {
    return db.availableroom.create({
        data,
    });
}