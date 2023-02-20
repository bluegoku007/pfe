const service = require("../models/service.model");

module.exports.createservice = async (req,res) => {
    try {
        // get body content
        let { name,prix,image,quantite } = req.body
        let newservice = new service({
            name: name,
            prix:prix,
            image:image,
            quantite
        })
        let savedservice = await newservice.save();
        return res.status(200).json({
            success: true,
            service: savedservice
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllservices = async (req,res) => {
    try {
        let services = await service.find();
        return res.status(200).json({
            success: true,
            services
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.updateservice = async (req,res) => {
    try {
        let {serviceId} = req.params;
        let { name,prix,image,quantite } = req.body;

        let updatedservice = await service.findByIdAndUpdate(serviceId,{
            $set: {
                name: name,
                prix:prix,
                image:image,
                quantite
            }
        },{new: true});
        return res.status(200).json({
            success: true,
            service: updatedservice
        })

    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.deleteservice = async (req,res) => {
    try {
        let {serviceId} = req.params;
        await service.findByIdAndDelete(serviceId);
        return res.status(200).json({
            success: true,
            message: "service deleted successfully."
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}

module.exports.findserviceById = async (req,res) => {
    try {
        let {serviceId} = req.params;
        let getservice = await service.findById(serviceId);
        return res.status(200).json({
            success: true,
            service: getservice
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}




