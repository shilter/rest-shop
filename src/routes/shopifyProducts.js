import { response, Router } from "express";
import 'dotenv/config';
import axios from "axios";

const shopifyProductsRouter = Router();

shopifyProductsRouter.get('/', async (req,res) => {
    try {
        axios.defaults.headers = {
            'X-Shopify-Access-Token': process.env.ACCESS_TOKEN,
        };
        const responseProducts = await axios.get(process.env.STORE_NAME+"admin/api/2021-10/products.json")
        .then(responseAll => {
            res.json({
                "data":responseAll.data,
                "message":"get response data"
            });
        }).catch(e => {
            res.json({
                "data":null,
                "message":e.responseAll.data
            });
        });
        res.send(responseProducts);
    } catch (error) {
        res.json({
            "data":null,
            "message":error,
        });
    }
});

shopifyProductsRouter.get('/:id', async (req,res) => {
    try {
        axios.defaults.headers = {
            'X-Shopify-Access-Token': process.env.ACCESS_TOKEN,
        };
        const responseProducts = await axios.get(process.env.STORE_NAME+"admin/api/2021-10/products/"+req.params.id+".json")
        .then(responseAll => {
            res.json({
                "data":responseAll.data,
                "message":"get response detail data"
            });
        }).catch(e => {
            res.json({
                "data":null,
                "message":e.responseAll.data
            });
        });
        res.send(responseProducts);   
    } catch (error) {
        res.json({
            "data":null,
            "message":error,
        });
    }
});

shopifyProductsRouter.post('/', async (req, res) => {
    try {
        axios.defaults.headers = {
            'X-Shopify-Access-Token': process.env.ACCESS_TOKEN,
            'Content-Type': 'application/json',
        };
        let dataProduct = {
            "product": {
                "title":req.body.title,
                "body_html":req.body.body_html,
                "vendor":req.body.vendor,
                "product_type":req.body.product_type,
                "tags":req.body.tags,
            }
        };

        const responseProducts = await axios.post(process.env.STORE_NAME+"admin/api/2021-10/products.json",dataProduct)
        .then(responseAll => {
            res.json({
                "data":responseAll.data,
                "message":"create data sucess"
            });
        }).catch(e => {
            res.json({
                "data":null,
                "message":e.responseAll.data
            });
        });
        res.send(responseProducts);
    } catch (error) {
        res.json({
            "data":null,
            "message":error,
        });
    }
});

shopifyProductsRouter.put('/:id', async(req, res) => {
    try {        
        axios.defaults.headers = {
            'X-Shopify-Access-Token': process.env.ACCESS_TOKEN,
            'Content-Type': 'application/json',
        };
        let dataProduct = {
            "product":{
                "id":req.params.id,
                "title":req.body.title,
            }
        };

        const responseProducts = await axios.put(process.env.STORE_NAME+"admin/api/2021-10/products/"+req.params.id+".json",dataProduct)
        .then(responseAll => {
            res.json({
                "data":responseAll.data,
                "message":"update title data"
            });
        }).catch(e => {
            res.json({
                "data":null,
                "message":e.responseAll.data
            });
        });
        res.send(responseProducts);  
    } catch (error) {
        res.json({
            "data":null,
            "message":error,
        });
    }
});

shopifyProductsRouter.delete('/:id', async (req, res) => {
    try {
        axios.defaults.headers = {
            'X-Shopify-Access-Token': process.env.ACCESS_TOKEN,
        };
        const responseProducts = await axios.delete(process.env.STORE_NAME+"admin/api/2021-10/products/"+req.params.id+".json")
        .then(responseAll => {
            res.json({
                "data":responseAll.data,
                "message":"deleted data"
            });
        }).catch(e => {
            res.json({
                "data":null,
                "message":e.responseAll.data
            });
        });
        res.send(responseProducts);   
    } catch (error) {
        res.json({
            "data":null,
            "message":error,
        });
    }
});


export default shopifyProductsRouter;