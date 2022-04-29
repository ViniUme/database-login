/* eslint-disable import/no-anonymous-default-export */
import Connect from "../../utils/database"

export default async (req,res) => {
    if(req.method == "POST"){
        const {db} = await Connect();
        const body = req.body
        const response = db.insertOne(body);

        res.status(200).json(response);
    }
}