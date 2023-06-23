import { hashSync } from "bcrypt";
import { ironOptions } from "../../../lib/ironOptions";
import { createClub, fetchClub } from "../../../services/clubServer";
import { withIronSessionApiRoute } from "iron-session/next";
import { withSessionRoute } from "../../../lib/ironOptions";
export default withSessionRoute(SignUp);

async function SignUp(req, res) {
    const body = await req.body;
    const response = await createClub({
        name: body.clubName,
        email: body.email,
        password: hashSync(body.password, 10),
    });

    const user = await fetchClub(body.email);
    req.session.user = user;
    await req.session.save();
    res.send({ status: 200, message: JSON.stringify(response) });
}
