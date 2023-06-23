import { useEffect, useState } from 'react';
import clubDetails from '../public/json/clubDetails.json'
import { register } from '@/operations/auth.fetch';

function SignUp() {
    const [clubEmail, setClubEmail] = useState("");
    useEffect(() => {
        let obj = clubDetails.find(o => o.email === clubEmail);
        if (obj) {
            setClubName(obj.name);
        } else {
            setClubName("The email does not match with any clubs");
        }
        console.log(obj);
    }, [clubEmail])
    const [clubName, setClubName] = useState("Fill In The Email");
    const [password, setPassword] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        await register({
            "clubName": clubName,
            "email": clubEmail,
            "password": password,
        }).then((res) => {
            if (res.status === 200) {
                alert('club created successfully');
                window.location.reload();
            } else {
                alert('internal error');
            }
        })
    }
    return (
        <div style={{ "paddingTop": "5rem", "display": "flex", "flexDirection": "column" }}>
            <input onChange={(e) => setClubEmail(e.target.value)} type="text" placeholder="email" />
            <input value={clubName} type="text" />
            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
            <button onClick={handleClick}>Sign Up</button>
        </div>
    )
}

export default SignUp;