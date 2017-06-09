
BSJS.tag = function (options) {
    var thisTag = this
    this.id = BSJS.newId()
    this.element = function () {
        return document.getElementById(thisTag.id)
    }
    this.jQ = function () {
        return $(document.getElementById(thisTag.id))
    }
    this.clear = function () {
        thisTag.jQ().html('')
    }
    this.hide = function () {
        thisTag.jQ().hide()
    }
    this.show = function () {
        thisTag.jQ().show()
    }
    this.set = function (str) {
        thisTag.jQ().html(str)
    }
    this.setonClick = function (fnc) {
        BSJS.functions[thisTag.id] = fnc
    }
    this.get = function () {
        return thisTag.jQ.html()
    }
    this.render = function () {
        thisTag.addAll(thisTag.contents)
    }
    this.contents = []
    this.add = function (obj) {
        var itemindex = thisTag.contents.indexOf(obj);
        if (itemindex > -1) thisTag.contents.splice(itemindex, 1);
        thisTag.contents.push(obj)
        if (thisTag.element()) { //If this tag doesn't exists it just stores the item in the contents array
            var crt = obj.create()
            if (crt.html) {
                thisTag.jQ().append(crt.html)
                if (crt.callback) crt.callback()
            } else {
                thisTag.jQ().append(crt)
            }
        }
    }
    this.addAll = function (arr) {
        arr.forEach(function (obj) {
            thisTag.add(obj)
        })
    }
    this.returnHTMLtag = function () {
        return 'id="' + thisTag.id + '" onClick="' + BSJS.name + '.functions[' + "'" + thisTag.id + "'" + ']()"'
    }
    this.setonClick(function () { })
    var optType = jQuery.type(options)
    console.log('options just before switch', options)
    console.log('optType', optType)
    switch (optType) {
        case "undefined":
            options = {}
            break;
        case "string":
            thisTag.add(new BSJS.span(options))
            break;
        case "array":
            thisTag.contents = options
            break;
        case "object":
            thisTag.add(options)
    }
    return this
}
