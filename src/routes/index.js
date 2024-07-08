const express=require("express");
const CityRepository=require('../controllers/city-controller');

const router=express.Router();
 

router.use('/city', CityRepository.create);
router.use('/get/:id',CityRepository.getcity);
router.use('/delete/:id',CityRepository.destroy);
router.use("/update/:id", CityRepository.update);



module.exports=router;