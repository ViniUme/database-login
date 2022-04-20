import Connect from '../../../utils/database';

export default async (req,res) => {
    const { db } = await Connect();

    if(req.method === 'POST'){
        const response = await db.collection('users').insertOne(req.body)
        res.status(200).json(response);
    }
    else{
        res.status(400).json({ meessage: "wrong request"});
    }
}