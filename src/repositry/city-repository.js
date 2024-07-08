const { where } = require('sequelize');
const { City }= require('../models/index');

class CityRepository {
  async createCity(data) {
    try {
      console.log(data);
      const city = await City.create({name:data.name}) 
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId
        }
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }

  async getdata(cityId) {
    try {
      const data = await City.findOne({
        where: {
          id: cityId
        }
      });
      return data;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async update(data,cityId){
      try{
        console.log(data);
        const city=await City.update(data,{
          where:{
            id:cityId
          }
        })
        return city;
      } catch(error){
         console.log(error)
         throw {error};
      }
  }
}

module.exports = CityRepository;
