import { generateId } from "../Utils/generateId.js";

export class House {
  constructor({ price, sqFootage, bedrooms, bathrooms, description, imgUrl }) {
    this.id = generateId(),
      this.price = price,
      this.sqFootage = sqFootage,
      this.bedrooms = bedrooms,
      this.bathrooms = bathrooms,
      this.description = description,
      this.imgUrl = imgUrl
  }

  get Template() {
    return `
    <div class="col-md-4">
      <div class="bg-white rounded shadow">
        <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="car image">
        <div class="p-3">
          <p> Price: '${this.price}'</p>
          <p>Sq. Footage: '${this.sqFootage}</p>
          <p>Bedrooms: '${this.bedrooms}'</p>
          <p>Bathrooms: '${this.bathrooms}'</p>
          <p>Description: '${this.description}'</p>
          </div>
          <button class="btn btn-outline-danger" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
          </div>
        </div>
      </div>`
  }
}