/* eslint-disable import/no-anonymous-default-export */
import Connect from "../../utils/database"

export default async (req,res) => {
    if(req.method == "POST"){
        const {db} = await Connect();
        const body = req.body

        const find = await db.findOne({email: body.email})

        console.log(find);

        if(find != null){
            res.status(400).json({message: "user already exist"})
        }
        else{
            await db.insertOne(body);
            res.status(200).json({message: "user sign on with success"});
        }
    }
}