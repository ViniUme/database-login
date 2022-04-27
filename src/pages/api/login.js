/* eslint-disable import/no-anonymous-default-export */
import Connect from "../../utils/database";

export default async (req,res) => {
    if(req.method === "POST"){
        const {db} = await Connect();
        const body = req.body;
        const comfirm = await db.findOne({email: body.email});

        if(comfirm.password == body.password){
            res.status(200).json({message: "logado"})
        }
        else{
            res.status(400).json({message: "algo de errado não esta certo"})
        }
    }
    else{
        res.status(400).json({message: "wrong method"})
    }
}