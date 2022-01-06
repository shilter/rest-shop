import {Router} from "express";
import models from "../models/index.js";

const productsRouter = Router();

productsRouter.get('/', async (req,res) => {
    const productsFindAll  = await models.products.findAll();
    return res.send(productsFindAll);
});

productsRouter.get('/:id', async (req, res) => {
    const productsFindById = await models.products.findByPk(req.params.id);
    res.send(productsFindById);
});

productsRouter.post('/', async (req, res) => {
    const productsCreated = await models.products.create({
        name:req.body.name,
        quantity:req.body.quantity,
    });
    res.send(productsCreated);
});

productsRouter.put('/:id', async (req, res) => {
    try {
        const productsUpdated = await models.products.update({
            name:req.body.name,
            quantity:req.body.quantity
        }, {
            where:{id:req.params.id}
        });
        if (!productsUpdated) throw('Error Updated Data');
        const resultProducts = await models.products.findByPk(req.params.id);
        if (!resultProducts) throw('Error while fetch data');
        res.send(true);   
    } catch (error) {
        res.send(error);
    }
});

productsRouter.delete('/:id',async (req, res) => {
    try {
        const productsDeleted = await models.products.destroy({
            where:{id:req.params.id},
        });
        if (!productsDeleted) throw('Error Deleted Data');
        res.send(true);   
    } catch (error) {
        res.send(error);
    }
});

export default productsRouter;