import { Children, createContext, useState } from "react";

export const RoomContext = createContext({});

export function RoomsProvider({ children }) {
    const [allRooms, setAllRooms] = useState([])
    async function fetchAllRooms() {
        return fetch("/api/room/fetchRoms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json()).then((res) => {
            if (res.status === 200) {
                setAllRooms(res.rooms);
            }
        })
    }

    const rooms = {
        allRooms,
        setAllRooms,
        fetchAllRooms,
    }
    return <RoomContext.Provider value={rooms}>{children}</RoomContext.Provider>
}