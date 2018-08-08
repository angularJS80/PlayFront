
// Api 호출항수 From By button
function getSuccessOutput() {
    alert("ajax 실행직전");
    $.ajax(
        {
        url:'https://httpbin.org/get',
        complete: function (response) {


            console.log(response.responseText);
            var rtnJson = JSON.parse(response.responseText);
            setJson(rtnJson.rtnList);
            setDataTables(rtnJson.rtnList);

        },
        error: function () {
            $('#output').html('Bummer: there was an error!');
        },
    }
    );

    return false;
}

httpDef =  {
    url:'https://httpbin.org/get',
    complete: function (response) {


        console.log(response.responseText);
        var rtnJson = JSON.parse(response.responseText);
        setJson(rtnJson.rtnList);
        setDataTables(rtnJson.rtnList);

    },
    error: function () {
        $('#output').html('Bummer: there was an error!');
    },
};

ajax(httpDef);

function ajax(httpDef){
    
    result = httpCall ( ttpDef.url);
    if(result){
        httpDef.complete();
    }

}


// Json 데이터 화면에 표현 Call by getSuccessOutput(Use BootStrap Tables Lib)
function setDataTables(jsonListData){
    $('#example').DataTable(
        {
            data: jsonListData,
            table: "#example",
            columns: [
                { data: "USER_ID" },
                { data: "USER_PASSWORD" },
                { data: "USER_NAME" },
                { data: "USER_AGE" }
            ]
        }
    );
}

// Json 데이터 화면에 Append Call By getSuccessOutput
function setJson(jsonListData) {
    var showData = $('#show-data');
    var items = jsonListData.map(function (item) {
        return item.USER_ID + ': ' + item.USER_NAME;
    });

    showData.empty();
    console.log(items.length);
    console.log(jsonListData);
    if (items.length) {
        var startContent = '<div class="input-group" >'
                                +'<span class="input-group-addon">'
                                    +'<input type="checkbox" >'
                                +'</span>'
                                +'<input type="text" class="form-control" value="';
        var endContent =    '"/><span class="input-group-btn">'
                                +'<button class="btn btn-danger" type="button" >delete</button>'
                              +'</span>'
                         +'</div>';
        var content = startContent + items.join(endContent + startContent )+endContent;
        showData.append(content);
    }

}
