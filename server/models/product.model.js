const mongoose = require('mongoose')
const request = require('request')
const fs = require('fs')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true,
        default: 'USD'
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    qty:{
        type: Number,
        required: true
    },
    imgurl: {
        type: String,
        required: true
    },
    comments: [{
        body: String,
        data: Date
    }],
    views: {
        type: Number,
        required: false
    }
})

function foo(image, fn){
    request.post({
        url: 'https://api.imgbb.com/1/upload?key=' + process.env.IMGBB_API_KEY,
        form: {
            image: image
        }
    }, function (err, body) {
        if (err) {
            return res.send({
                message: `upload failed: ` + err
            });
        }
        fn(JSON.parse(body).data.url)
    })
}

productSchema.pre('save', async function (next) {
    const img = new Buffer.from(fs.readFileSync(this.imgurl)).toString('base64')
    await foo(img, function(url){
        console.log(url)
        productSchema.imgurl = url
    }) 
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product