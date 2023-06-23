export async function createRoom(data) {
    return fetch("/api/room/allRooms" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

export async function createAvailRoom(data) {
    return fetch("/api/room/availableRoom" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}
