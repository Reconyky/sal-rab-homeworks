// Первая задача

function sendRequest(name, phone, address, goods, sum) {
    
    let data = {
        
        client: "",
       
        goods: [

          ],
          
          order: {
              
          }
    };

    
    
    let countOfGoods = goods.length;
   
      for (let i = 0; i < countOfGoods; i+=1) {
        data.goods.push(goods[i].title, goods[i].count);

    }

    data.order.address =`'ул. '${address.street}, 'дом '${address.house}, ${address.entrance}' подъезд', 
                         ${address.floor}' этаж', ${address.flat}' квартира'`;
        
    data.order.sum = sum; 

    data.client = `'${client.name} ${client.phone}'`;

    let jsonData = JSON.stringify({data});

    return jsonData;
}



// Вторая задача


function sendRequest(name, phone, address, goods, sum) {
    
    let data = {
          
        goods: [

          ],
          
          order: {

          }
    };

    



    
    
    let countOfGoods = goods.length;
   
      for (let i = 0; i < countOfGoods; i++) {
        data.goods.push(goods[i].title, goods[i].count);
        
    }

    data.order.address = `'ул.' ${address.street}, 'дом' ${address.house}, ${address.entrance} 'подъезд', 
                         ${address.floor} 'этаж', ${address.flat} 'квартира'`;
        
    data.order.sum = sum; 

    data.client = `${client[name]} + ${client[phone]}`;

    let jsonData = JSON.stringify({data});

    return jsonData;
};