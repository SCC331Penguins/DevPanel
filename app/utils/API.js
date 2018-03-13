class API{
  constructor(){
    this.apiRoot = 'http://localhost:8080';
  }
  handleErrors(res){
    return res.json();
  }
  login(username, password) {
    const body = {username, password};
    return fetch(`${this.apiRoot}/login`, {
      body:JSON.stringify(body),
      method: 'POST',
    })
    // .then(this.handleErrors)

  }
  getStatus(){
    return new Promise(function(resolve, reject) {
      resolve({Pi:'Up'})
    });
  }
}
export default new API()
