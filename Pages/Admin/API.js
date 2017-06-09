var API = {
    call: function (url, additional, callback) {
        var adparams = ""
        if (additional) {
            for (var prop in additional) {
                adparams += "&" + prop + "=" + additional[prop];
            }
        }
        $.ajax({
            url: url
            , type: "post"
            , data: adparams
            , success: function (response) {
                if (callback) callback(response)
            }
            , error: function (jqXHR, textStatus, errorThrown) {
                //alert(textStatus, errorThrown);
            }
        });
    },
    postObject: function (url, obj, callback) {
        $.ajax({
            contentType: 'application/json',
            data: JSON.stringify(obj),
            dataType: 'json',
            success: function (data) {
                if (callback) callback(data)
                console.log("device control succeeded");
            },
            error: function (r) {
                console.log("Device control failed");
                console.log(r);
            },
            processData: false,
            type: 'POST',
            url: url
        });
    },
    getObject: function (url, obj, callback) {
        $.ajax({
            contentType: 'application/json',
            data: undefined,//JSON.stringify(obj),
            dataType: 'json',
            success: function (data) {
                if (callback) callback(data)
                console.log("device control succeeded");
            },
            error: function () {
                console.log("Device control failed");
            },
            processData: false,
            type: 'GET',
            url: url
        });
    },
    set: function (objM) {
        return {
            find: function (obj) {
                API.find(obj, (r) => { objM = r })
            }

        }


    },
    find: function (obj, func) {
        API.postObject("/API/find/", obj, func)
    },
    insert: function (obj, func) {
        API.postObject("/API/insert/", obj, func)
    },
    save: function (obj, func) {
        API.postObject("/API/save/", obj, func)
    },
    findAndModify: function (obj, func) {
        API.postObject("/API/findAndModify/", obj, func)
    },
    update: function (obj, func) {
        API.postObject("/API/update/", obj, func)

    }

}