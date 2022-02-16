import { House } from "../Models/House.js"
import { ProxyState } from "../AppState.js";
class HousesService {
  pickAHouse(newHouse) {
    console.log('got a house', newHouse);
    let realHouse = new House(newHouse);
    console.log('its a real house!', realHouse);
    ProxyState.houses = [realHouse, ...ProxyState.houses]
  }

  deleteHouse(houseId) {
    console.log('delete this house', houseId);
    let indexToDelete = ProxyState.houses.findIndex(h => h.id == houseId)
    ProxyState.houses.splice(indexToDelete, 1)
    ProxyState.houses = ProxyState.houses
  }

}

export const housesService = new HousesService()