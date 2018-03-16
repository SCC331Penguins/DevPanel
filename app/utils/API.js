class API{
  constructor(){
    this.apiRoot = 'http://192.168.113:5001';
  }
  handleErrors(res){
    return res.json();
  }
  login(username, password) {
    const body = {username, password};
    return fetch(`${this.apiRoot}/user/login`, {
      body:JSON.stringify(body),
      headers:{
        'Content-Type':'application/json'
      },
      method: 'POST',
    })
    .then(this.handleErrors).then(res => res.token)

  }
  getStatus(){
    return new Promise(function(resolve, reject) {
      resolve({Pi:'Up'})
    });
  }
  getRouterStatus(rID){
    return new new Promise(function(resolve, reject) {
    });
  }
}
export default new API()
