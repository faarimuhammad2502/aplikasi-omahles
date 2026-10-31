export default async function handler(req, res) {
    const { text, lang = 'id' } = req.query;
    if (!text) {
        return res.status(400).send("Missing text parameter");
    }

    try {
        const clean = text.toString().slice(0, 200);
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(clean)}&tl=${encodeURIComponent(lang)}&client=tw-ob`;
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });

        if (!response.ok) {
            return res.status(response.status).send("TTS upstream error");
        }

        const buffer = await response.arrayBuffer();
        res.setHeader("Content-Type", "audio/mpeg");
        res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=86400");
        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.status(200).send(Buffer.from(buffer));
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
