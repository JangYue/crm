import { makeAutoObservable } from "mobx";

class useMobxStore{
  count : number = 0;
  isLogin:boolean = false;
  signupProgress:number = 0;
  constructor(){
    makeAutoObservable(this)
  }
  addCount = ()=>{
    this.count++;
    console.log(this.count)

  }
  changeSignupProgress = (progress:number)=>{
    this.signupProgress = progress;
  }
  changeLogin = (loginState:boolean)=>{
    this.isLogin = loginState;
  }
}
const mobxStore = new useMobxStore();
export default mobxStore;
