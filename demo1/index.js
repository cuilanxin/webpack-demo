import varaDefault,{ vara, varFun } from './vara'
const dom = document.getElementById('demo1-dv')
dom.setAttribute("style","font-size: 24px; color: #f50;text-align: center;padding-top: 20px")
dom.innerHTML = '俺啥也不刽';
function func(){
  console.log(varaDefault, vara, varFun);
}
func()
export const a = 1