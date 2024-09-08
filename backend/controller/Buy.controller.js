import Buy from "../model/buy.model.js";

export const buy = async (req, res) => {
    try {
        const { fullname, number, address, code } = req.body;
        const createdBuy = new Buy({ 
            fullname: fullname,
            number: number,
            address: address,
            code: code
        });
        await createdBuy.save();
        res.status(201).json({
            message: "Done!! Make Payment",
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
