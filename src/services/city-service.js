const CityRepository = require('../repositry/city-repository'); // Ensure the correct path to CityRepository

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async getdata(cityId) {
    try {
      const city = await this.cityRepository.getdata(cityId);
      return city;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }


  async updata(data, cityId){
      try{
        const city= await this.cityRepository.update(data, cityId);
        return city;
      }
      catch(error)
      {
          console.log(error);
          throw {error};
      }
  }
}

module.exports = CityService;
