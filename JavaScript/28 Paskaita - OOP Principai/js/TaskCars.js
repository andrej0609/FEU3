class Car {
  constructor(brand, model, mileage, price, image) {
    this.brand = brand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = image;
  }
  get() {
    const container = document.querySelector('.container');
    const createDiv = document.createElement('div');
    createDiv.className = 'card';
    const createImage = document.createElement('img');
    createImage.src = this.image;
    const createText = document.createElement('h2');
    createText.innerText = `${this.brand} ${this.model}`;
    createDiv.append(createImage, createText);
    container.append(createDiv);
    createDiv.addEventListener('click', () => {
      alert (`${this.price} € ${this.mileage} Km`);
    })
  }
}

document.querySelector('#autoForma').addEventListener('submit', (event) => {
  event.preventDefault();
  const brand = document.querySelector('#brand').value;
  const model = document.querySelector('#model').value;
  const mileage = document.querySelector('#mileage').value;
  const price = document.querySelector('#price').value;
  const image = document.querySelector('#image').value;
  const car = new Car(brand, model, mileage, price, image);
  car.get();
})
  
