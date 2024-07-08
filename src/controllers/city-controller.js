const { CityService } = require("../services/Index");
const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      data: {},
      success: false,
      message: "Failed to create city",
      error: { error },
    });
  }
};
const getcity = async (req, res) => {
  try {
    console.log(req.params.id)
    const city = await cityService.getdata(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully retrived city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      data: {},
      success: false,
      message: "Failed to retrive city",
      error: { error },
    });
  }
};
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      data: response,
      success: false,
      message: "Failed to delete city",
      error: { error },
    });
  }
};

const update=async(req,res)=>{
      try{
          const response= await cityService.updata(req.body, req.params.id)
          return res.status(200).json({
             data:response,
             status:true,
             message:"Successfully Updated",
             error:{}
          })
      } 
      catch(error){
           console.log(error)
           return res.status(400).json({
              data:{},
              success:false,
              message:"Failed to update",
              error:{error}

           })
      }
}

module.exports = {
  create,
  destroy,
  getcity,
  update
};
