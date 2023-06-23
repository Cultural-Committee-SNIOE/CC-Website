import { fetchRooms } from "@/services/roomServer";

export default async function fetchAllRooms(req, res) {
    const response = await fetchRooms();
    res.send({ status: 200, rooms : response });
}