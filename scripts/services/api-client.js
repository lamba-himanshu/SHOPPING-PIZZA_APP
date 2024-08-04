//network call code

export async function makeNetworkCall(){
    try{
        const URL = 'https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json';
        const response = await fetch(URL);
        const object = await response.json();
        return object;
    }
    catch(error){
        console.log('Some Problem in API call',error);
        throw error;
    }
    // promise.then(response => {
    //     console.log('promise is', response);  
    //         //deserialization: JSON to object
    //     promise2.then( data => {
    //         console.log('DATAis ', data);
            
    //     }).catch(e =>{
    //         console.log("JSON parse Error",e);
            
    //     });
    // }).catch(error =>{
    //     console.log('ERROR',error);
    // });
    
}
export default makeNetworkCall;