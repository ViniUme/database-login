/* eslint-disable import/no-anonymous-default-export */
import Connect from "../../utils/database";

export default async function handler (req,res){
    if(req.method == "POST"){
        const {db} = await Connect();
        const body = req.body;
        const comfirm = await db.findOne({email: body.email});

        if(comfirm.password == body.password){
            res.status(200).json(comfirm)
        }
        else{
            res.status(400).json({message: "user not exist"})
        }
    }
    else{
        res.status(400).json({message: "wrong method, use POST"})
    }
}