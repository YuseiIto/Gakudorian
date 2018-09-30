function add() {

    var i = document.getElementById("children").childElementCount;
    var p = i;


    var elm = document.createElement("tr");
    elm.id = "Child" + i
    elm.innerHTML = '<td> <input type ="text" id ="child_ID_' + p + '"> </td>\
    <td><input type = "text" id = "child_Name_' + p + '"></td>\
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

    var ID = document.getElementById("child_ID_" + i).value;
    var _Name = document.getElementById("child_Name_" + i).value;
    var _Allergie = document.getElementById("child_Allergie_" + i).value;
    var _Grade = document.getElementById("child_Grade_" + i).value;
    var _Note = document.getElementById("child_Note_" + i).value;

    let signedGakudo = "Donguri" //TODO: Meke it Generic
    firebase.database().ref('Gakudo/' + signedGakudo + "/Children/" + ID).set({
        Name: _Name,
        Allergie: _Allergie,
        Grade: _Grade,
        Note: _Note
    });

}