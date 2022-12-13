export default function handler(req, res) {
    // res.status(200).json({message:'This works!'});
    if (req.method === 'POST') {
        const name = req.body.name;
        const desc = req.body.desc;
        const skills = req.body.skills;
        const category = req.body.category;
        const photo = req.body.photo;

        const newGroup = {
            groupId: new Date(),
            name: name,
            desc: desc,
            skills: skills,
            category: category,
            photo: photo
        }
        res.status(200).json({ msg: 'Success' });
    } else {
        res.status(500).json({ msg: 'No group was created' });
    }



}