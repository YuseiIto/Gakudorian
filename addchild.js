    let signedGakudo = "Donguri" //TODO: Meke it Generic
    var Children_ref = firebase.database().ref('Gakudo/' + signedGakudo + "/Children/");

    var IDList = [0]; //Global

    function RandomString() {
        // 生成する文字列の長さ
        var l = 8;

        // 生成する文字列に含める文字セット
        var c = "abcdefghijklmnopqrstuvwxyz0123456789";

        var cl = c.length;
        var r = "";
        for (var i = 0; i < l; i++) {
            r += c[Math.floor(Math.random() * cl)];
        }
        return r;
    }

    function GenelateID() {
        ReloadDB();
        var random = RandomString(); //これがIDの候補

        //すでに発行済のIDかどうか調べ、発行済なら再生成
        while (IDList.indexOf(random) != -1) {
            ReloadDB();
            random = RandomString();
        }

        return random;
    }


    function add(flg) {

        var i = document.getElementById("children").childElementCount;
        var p = i;
        var elm = document.createElement("tr");
        elm.id = "Child" + i

        let str = "";
        if (!flg) {
            str = GenelateID();
        }
        elm.innerHTML = '<td> <h4 id ="child_ID_' + p + '">' + str + ' </h4></td>\
    <td><input type = "text" id = "child_Name_' + p + '"></td>\
    <td> <input type = "text" id = "child_Allergie_' + p + '"></td>\
    <td> <input type = "text"  id = "child_Grade_' + p + '"> </td>\
    <td> <input type = "text"  id = "child_Parent_' + p + '" > </td>\
    <td> <input type = "text"  id = "child_Note_' + p + '" > </td>\
    <td> <input type = "button"value = "保存" onclick = "saveChild(' + p + ');"></td>\
    <td> <input type = "button" value = "削除" onclick = "deleteChild(' + p + ');" ></td>'
        document.getElementById("children").appendChild(elm);

    }

    function Display(ID, Name, Allergie, Grade, Parent, Note) {

        add(true);


        var trim = function(arg) {

            let a = arg;
            if (arg == undefined || arg == null || arg == false) {
                a = "";
            }

            return a;

        }

        document.getElementById("child_ID_" + p).innerText = trim(ID);
        document.getElementById("child_Name_" + p).value = trim(Name);
        document.getElementById("child_Allergie_" + p).value = trim(Allergie);
        document.getElementById("child_Grade_" + p).value = trim(Grade);
        document.getElementById("child_Parent_" + p).value = trim(Parent);
        document.getElementById("child_Note_" + p).value = trim(Note);




    }


    function ReloadDB() {
        Children_ref.once('value').then(function(snapshot) {

            snapshot.forEach(function(childSnapshot) {
                // key will be "ada" the first time and "alan" the second time
                var ID = childSnapshot.key;
                // childData will be the actual contents of the child
                var childData = childSnapshot.val();

                IDList.push(ID); //Add to the ID list.

                //Get Values of each field
                var Name = childData.Name;
                var Allergie = childData.Name;
                var Grade = childData.Grade;
                var Parent = childData.Parent;
                var Note = childData.Note;

                Display(ID, Name, Allergie, Grade, Parent, Note);

            });

        });
    }


    //ページ読み込み時に実行
    ReloadDB();
    Children_ref.on('value', function(snapshot) {
        ReloadDB();
    });
    //======================================================




    function deleteChild(i) {
        //自分を削除
        document.getElementById("Child" + i).parentNode.removeChild(document.getElementById("Child" + i));
    }

    function saveChild(i) {

        var ID = document.getElementById("child_ID_" + i).innerText;
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