// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });

async function solu(){
    let customer = await getCustomer(1);
    console.log('Customer: ', customer);
    console.log(typeof(customer));
    if(customer.isGold){
        let topMoives = await getTopMovies();
        console.log('Top movies: ', topMoives);
        let email = await sendEmail(customer.email,topMoives);
        console.log('Email sent...')
    }
}

solu();
  
  function getCustomer(id) {  
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Mosh Hamedani', 
              isGold: true, 
              email: 'email' 
            });
          }, 4000);
    });
  }
  
  function getTopMovies() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
          }, 4000);
    });
  }
  
  function sendEmail(email, movies) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve();
          }, 4000);
    });
  }