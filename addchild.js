function add() {

    var i = document.getElementById("children").childElementCount;
    var p = i;


    var elm = document.createElement("tr");
    elm.id = "Child" + i
    elm.innerHTML = '<td> <input type ="text" id ="child_ID_' + p + '"> </td>\
    <td><input type = "text" id = "child_Name_' + p + ' "></td>\
    <td> <input type = "text" id = "child_Allergie_' + p + '"></td>\
    <td> <input type = "text"  id = "child_Grade_' + p + '"> </td>\
    <td> <input type = "text"  id = "child_Note_' + p + '" > </td>\
    <td> <input type = "button"value = "保存" onclick = "saveChild(' + p + ');"></td>\
    <td> <input type = "button" value = "削除" onclick = "deleteChild(' + p + ');" ></td>'



    document.getElementById("children").appendChild(elm);

}

function deleteChild(i) {
    //自分を削除
    document.getElementById("Child" + i).parentNode.removeChild(document.getElementById("Child" + i));
}

function saveChild(i) {


}