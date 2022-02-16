import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Components/HouseForm.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouse() {
  let template = ''
  ProxyState.houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}

export class HouseController {
  constructor() {
    ProxyState.on('houses', _drawHouse)
    console.log('Controller says lets GO!', ProxyState.houses);
    _drawHouse();
  }

  viewHouses() {
    _drawHouse()
    document.getElementById('modal-body-slot').innerHTML = getHouseForm()
  }

  pickAHouse(event) {
    event.preventDefault()
    let form = event.target
    console.log('pick a house', form)
    let newHouse = {
      price: form.price.value,
      sqFootage: form.sqFootage.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    console.log('pick a house', newHouse)
    housesService.pickAHouse(newHouse)
    form.reset()
  }

  deleteHouse(houseId) {
    console.log('later house', houseId);
    housesService.deleteHouse(houseId)
  }

  //   function viewHouses() {
  //     _drawHouse()
  //     document.getElementById('modal-body-slot').innerHTML = getHouseForm()
  //   }
}