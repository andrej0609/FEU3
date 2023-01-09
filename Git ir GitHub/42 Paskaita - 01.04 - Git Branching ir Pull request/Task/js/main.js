const subscriptions = document.querySelector('.subscriptions');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.subscriptions.forEach(sub => {
      const div = document.createElement('div');
      div.classList.add('subscription');
      div.innerHTML = `
        <img src="${sub.img}" alt="${sub.name}">
        <span>${sub.name}</span>
      `;
      subscriptions.append(div);
    });
  });

const content = document.querySelector('.content');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.korteles.forEach(card => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
      <div class="cardimg">
        <img src="${card.image}" alt="">
      </div>
        <div class="details">
          <div class="cardlogo">
            <img src="${card.logo}" alt="">
          </div>
          <div class="cardinfo">
             <h3>${card.description}</h3>
           <div class="card__info__bottom">
             <a href="#">${card.title}</a>
            <div>
              <span>${card.views}</span>
             </div>
          </div>
        </div>
      </div>
      `;
      content.append(div);
    });
  });


