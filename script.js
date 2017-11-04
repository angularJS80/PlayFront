
// Api 호출항수 From By button
function getSuccessOutput() {
    $.ajax({
        url:'http://localhost:80/demo/test/getUserList',
        complete: function (response) {
            var rtnJson = JSON.parse(response.responseText);
            setJson(rtnJson.rtnList);
        },
        error: function () {
            $('#output').html('Bummer: there was an error!');
        },
    });
    return false;
}

// Api 호출항수 From By getSuccessOutput
function setJson(jsonListData) {
    var showData = $('#show-data');
    var items = jsonListData.map(function (item) {
        return item.USER_ID + ': ' + item.USER_NAME;
    });

    showData.empty();
    console.log(items.length);
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
