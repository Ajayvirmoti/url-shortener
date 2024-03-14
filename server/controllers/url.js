import { nanoid } from "nanoid";
import URL from "../models/url.js";


export const handleGenerateNewURL = async (req, res) => {
    console.log("test")
    const shortId = nanoid(8);
    const Body = req.body;
    console.log(req.body)
    if(!Body.url) return res.status(400).json({message: "url is required"});
    await URL.create({
        shortId: shortId,
        requiredUrl: Body.url
    });

    return res.json({id: shortId});
}

export const handleURLRedirect = async (req, res) => {
    const id = req.params.id;
    const url = await URL.findOne({shortId: id});
    if(!url) return res.status(404).json({message: "URL not found"});
    return res.json({url: url.requiredUrl});
}

