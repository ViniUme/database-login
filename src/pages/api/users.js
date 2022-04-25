/* eslint-disable import/no-anonymous-default-export */
import Connect from '../../../utils/database';

export default async (req,res) => {
    const { db } = await Connect();

    if(req.method === 'POST'){
        const response = await db.collection('users').insertOne(req.body)
        res.status(200).json(response);
    }
    else if(req.method === 'GET'){
        const deleteResult = await db.collection('users').deleteMany({
            "nome": "rodirog",
            "elemata": "mata"
        });
        res.status(200).json(deleteResult);
    }
    else{
        res.status(400).json({ meessage: "wrong request"});
    }
}