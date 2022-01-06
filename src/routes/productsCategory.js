import { Router } from "express";
import models from "../models/index.js";


const category = Router();

category.get('/', async (req,res) => {
    const getAllPc = await models.productsCategory.findAll();
    res.send(getAllPc);
});

category.get('/:id', async (req,res) => {
    const getById = await models.productsCategory.findByPk(req.params.id);
    res.send(getById);
});

category.post('/', async (req, res) => {
    const createCategory = await models.productsCategory.create({
        text:req.body.text,
    });
    res.send(createCategory);
});

category.put('/:id', async (req, res) => {
    try {
        const categoryUpdated = await models.productsCategory.update({
            text:req.body.text,
        }, {
            where:{id:req.params.id}
        });
        if (!categoryUpdated) throw('Error Updated Data');
        const resultCategory = await models.productsCategory.findByPk(req.params.id);
        if (!resultCategory) throw('Error while fetch data');
        res.send(true);   
    } catch (error) {
        res.send(error);
    }
});

category.delete('/:id', async (req, res) => {
    try {
        const categoryDeleted = await models.productsCategory.destroy({
            where:{id:req.params.id},
        });
        if (!categoryDeleted) throw('Error Deleted Data');
        res.send(true);   
    } catch (error) {
        res.send(error);
    }
});

export default category;