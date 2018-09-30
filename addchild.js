    let signedGakudo = "Donguri" //TODO: Meke it Generic
    var Children_ref = firebase.database().ref('Gakudo/' + signedGakudo + "/Children/");
    ReloadDB();


    Children_ref.on('value', function(snapshot) {
        //updateStarCount(postElement, snapshot.val());
    });


    function Display(ID, Name, Allergie, Grade, Note) {

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


        document.getElementById("child_ID_" + p) = ID;
        document.getElementById("child_Name_" + p) = Name;
        document.getElementById("child_Allergie_" + p) = Allergie;
        document.getElementById("child_Grade_" + p) = Grade;
        document.getElementById("child_Note_" + p) = Note;

        document.getElementById("children").appendChild(elm);


    }

    function ReloadDB() {
        Children_ref.once('value').then(function(snapshot) {

            snapshot.forEach(function(childSnapshot) {
                // key will be "ada" the first time and "alan" the second time
                var ID = childSnapshot.key;
                // childData will be the actual contents of the child
                var childData = childSnapshot.val();


                //Get Values of each field
                var Name = childData.Name;
                var Allergie = childData.Name;
                var Grade = childData.Grade;
                var Note = childData.Note;

                Display(ID, Name, Allergie, Grade, Note);

            });

        });
    }


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

        firebase.database().ref('Gakudo/' + signedGakudo + "/Children/" + ID).set({
            Name: _Name,
            Allergie: _Allergie,
            Grade: _Grade,
            Note: _Note
        });

    }