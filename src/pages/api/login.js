/* eslint-disable import/no-anonymous-default-export */
import Connect from "../../utils/database";

export default async (req,res) => {
    if(req.method === "POST"){
        const {db} = await Connect();
        const body = req.body;
        var comfirm = await db.findOne({email: body.email});
        console.log(comfirm)
        res.return
    }
}