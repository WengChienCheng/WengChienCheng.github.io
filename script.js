var input = document.getElementById('text');
var button = document.getElementById('send');
var list = document.getElementById('list');

button.addEventListener("click",addData);
//button被點後執行addData
var todolist=[];

function addData() {
  todolist.push(input.value);
  tool();
}
var index;
function delData(index){
  var temp=[];
  for (var i=0; i<todolist.length;i++){
    if (i!=index) temp.push(todolist[i]);
  }
  todolist=temp;
  tool();
}



// 用function把重複的code包起來以利重複使用 呼叫即可
function tool() {
  var plus = "";
  for (var i = 0; i < todolist.length; i++) {
    plus = plus + "<div><button onclick='delData(" + i + ")'>刪除</button>" + todolist[i] + "</div>";
  }
  list.innerHTML = plus;
}