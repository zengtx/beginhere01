
// 当leftdiv加载的时候 调用的函数; 在待办清单中创建一个p标签，内容为创建待办清单
// function qingDan(){
//   let toDoList = window.document.getElementsById('toDoList');
//   let p = window.document.createElement('p'); // 创建一个p标签
  
//   p.innerText = "创建待办清单";
//   toDoList.appendChild(p);//将p标签放在toDoList中
  
// }

//定义一个daiBan 值为布尔
// let daiBan = false;
let date = window.document.getElementById('date');
date.innerHTML = new Date();

let anNiu = window.document.getElementById('anNiu');
let shuRuKuang = window.document.getElementById('shuRuKuang');
let neiRong = shuRuKuang.value;
let toDoList = window.document.getElementById('toDoList');//声明一个toDoList获取到div标签
let toDoThing = window.document.getElementById('toDoThing');  
//定义一个toDo函数，当按钮被点击时调用
function toDo(){
 
  //当内容为空时，在输入框中显示“输入待办事项”
 
  if(shuRuKuang.value.length == 0){
  
    alert("输入待办事项")
    
  }else{
    
    let toDoList = window.document.createElement('div');//创建一个toDoList的div标签
    // toDoList.class = toDoList flex-bt;
    toDoList.className = "toDoList flex-bt";//给div添加class属性
    qingDan.appendChild(toDoList);

    let toDoItem = window.document.createElement('div');//创建一个toDoItem的div标签
    toDoList.appendChild(toDoItem);//将toDoItem放在toDoList中
    toDoItem.id=("toDoItem");

    let toDoThing = window.document.createElement('p');//声明一个toDoThing，值为创建一个p标签
    toDoItem.appendChild(toDoThing);//将p标签放在toDoItem的div中
  
    let check = window.document.createElement('div');//声明一个toDoItem的div标签
    toDoList.appendChild(check);//将check的div放在toDoList中

    let done = window.document.createElement('input');//声明一个done，创建“input”标签
    done.setAttribute("type","checkbox"); //将input设置type属性设置为checkbox类型
    done.id = "done";
    done.oneclick = "check()";

    check.appendChild(done);//将done放在父级check中
    toDoThing.innerText = neiRong;
  }
}

function check(){
  let checkBox = window.document.getElementById("done");
  let check = window.document.getElementById('done');//声明一个toDoItem的div标签
  let toDoItem2 = window.document.getElementById("toDoItem");

  if(checkBox.checked = true){
    toDoItem2.remove();
  }
}

