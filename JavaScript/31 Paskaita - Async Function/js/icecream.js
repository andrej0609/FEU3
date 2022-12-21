let stocks = {
  Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid : ["Water", "Ice"],
  holder : ["Cone", "Cup", "Stick"],
  toppings : ["Chocolate", "Peanuts"],
};

let is_shop_open = true;

//Callback

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("Production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
        setTimeout(() => {
          console.log("Start the machine");
          setTimeout(() => {
            console.log(`Ice cream placed on ${stocks.holder[1]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`);
              setTimeout(() => {
                console.log("Serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(0, production);

//Promise
/*

let time = 2000;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

order(time, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(time, () => console.log("production has started"));
  }
  )
  .then(() => {
    return order(time, () => console.log("The fruit has been chopped"));
  }
  )
  .then(() => {
    return order(time, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`));
  }
  )
  .then(() => {
    return order(time, () => console.log("start the machine"));
  }
  )
  .then(() => {
    return order(time, () => console.log(`Ice cream placed on ${stocks.holder[1]}`));
  }
  )
  .then(() => {
    return order(time, () => console.log(`${stocks.toppings[0]} as toppings`));
  }
  )
  .then(() => {
    return order(time, () => console.log("serve Ice cream"));
  }
  )
  .catch(() => {
    console.log("Customer left");
  }
  )
  .finally(() => {
    console.log("day ended, shop is closed");
  }
  );

*/
//Async Function
/*
let time = 2000;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
}

async function kitchen(){
  try{
    await order(time, () => console.log(`${stocks.Fruits[0]} was selected`))
    await order(time, () => console.log("production has started"))
    await order(time, () => console.log("The fruit has been chopped"))
    await order(time, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`))
    await order(time, () => console.log("start the machine"))
    await order(time, () => console.log(`Ice cream placed on ${stocks.holder[1]}`))
    await order(time, () => console.log(`${stocks.toppings[0]} as toppings`))
    await order(time, () => console.log("serve Ice cream"))
  }
  catch(error){
    console.log("Customer left", error)
  }
  finally{
    console.log("day ended, shop is closed")
  }
}

kitchen();


*/
