import React, { useEffect, useState } from 'react';
import { createRoom } from '@/operations/room.fetch';

function Rooms() {
  const [blockName, setblockName] = useState("");
  const [roomNumber, setroomNumber] = useState("");


  const handleBlockChange = (event) => {
    setblockName(event.target.value);
  };

  const handleRoomNoChange = (event) => {
    setroomNumber(event.target.value);
  };

  const handleRooms = async (e) => {
    e.preventDefault();
    await createRoom({
      "blockName": blockName,
      "roomNumber": roomNumber,
    }).then((res) => {
      if (res.status === 200) {
        alert('Room Added');
        window.location.reload();
      } else {
        alert('error from our side');
      }
    })
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
      <button onClick={handleRooms}>Add Room</button>
    </div>
  );
}

export default Rooms;
