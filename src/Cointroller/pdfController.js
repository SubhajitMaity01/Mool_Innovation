var fs=require('fs');
const pdf = require('pdf-parse');
const simplePdfUpload= (req, res) => {
    upload(req, res, (err) => {
        let dataBuffer = fs.readFileSync(req.files[0].path);  
        pdf(dataBuffer).then(function(data) {
            res.send({"jsondata":data,})
        })
        .catch(function(error){
        })
    })
}

module.exports.simplePdfUpload=simplePdfUpload