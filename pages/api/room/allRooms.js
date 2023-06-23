import { createRoom } from "@/services/roomServer";

export default async function availaibleRooms(req, res) {
    const { blockName, roomNumber } = await req.body;
    const response = await createRoom({
        blockName: blockName,
        roomNumber: roomNumber,
    })
    res.send({ status: 200, message: JSON.stringify(response) });
}