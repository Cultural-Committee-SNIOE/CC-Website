import React, { useEffect, useState } from 'react';
import { createRoom } from '@/operations/room.fetch';
import useRoom from '@/hooks/useRooms';
function selectAvailableRooms() {
    const { fetchAllRooms, allRooms } = useRoom();
    const [blockName, setblockName] = useState("");
    const [roomNumber, setroomNumber] = useState("");
    const [date, setdate] = useState("");
    const [rooms , setRooms] = useState([]);
    useEffect(() => {
        console.log(typeof (fetchAllRooms))
        // fetchAllRooms();
        console.log(allRooms);
    },[]);



    const handleBlockChange = (event) => {
        setblockName(event.target.value);
    };

    const handleRoomNoChange = (event) => {
        setroomNumber(event.target.value);
    };

    const handleDateChange = (event) => {
        setroomNumber(event.target.value);
    };

    const handleAvailableRooms = async (e) => {
    e.preventDefault();
    try {
      const res = await createRoom({
        blockName: blockName,
        roomNumber: roomNumber,
        date: date,
      });

      if (res.status === 200) {
        alert('Room Available');
        window.location.reload();
      } else {
        alert('Error from our side');
      }
    } catch (error) {
      console.log(error);
      alert('Error from our side');
    }
  };

    return (
        <div style={{ paddingTop: '5rem' }}>
            <input
                type="text"
                placeholder="Block"
                value={blockName}
                onChange={handleBlockChange}
            />
            <input
                type="text"
                placeholder="Room No."
                value={roomNumber}
                onChange={handleRoomNoChange}
            />
            <input
                type="text"
                placeholder="Date"
                value={date}
                onChange={handleDateChange}
            />
            <button onClick={handleAvailableRooms}>Check Rooms</button>
            {rooms.map((item) => {
                (<><p style={{ color: "white" }}>{item.blockName}</p>
                    <p style={{ color: "white" }}>{item.roomNumber}</p></>)
            })}
        </div>
    

    );
}

export default selectAvailableRooms;
