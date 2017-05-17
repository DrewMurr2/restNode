var BSJS = function (name) {
    this.name = name
    var thisBSJS = this
    this.index = 0
    this.newId = function () {
        return 'BSJS' + thisBSJS.index++
    }
    this.functions = {}
    this.nav = {
        bar: function (options) {
            if (!options) options = {}
            if (options.title) this.optionalTitle = options.title
            else this.optionalTitle = ''
            var thisBar = this
            this.main = new thisBSJS.tag()
            this.title = new thisBSJS.tag()
            this.body = new thisBSJS.tag()
            this.left = new thisBSJS.tag()
            this.right = new thisBSJS.tag()
            this.create = function () {
                return '\
<nav id="' + this.main.id + '" class="navbar navbar-inverse">\
  <div class="container-fluid">\
    <div class="navbar-header">\
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#' + this.body.id + '">\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
      </button>\
      <a  ' + this.title.returnHTMLtag() + ' class="navbar-brand" href="#">' + this.optionalTitle + '</a>\
    </div>\
    <div class="collapse navbar-collapse" ' + this.body.returnHTMLtag() + '>\
        <ul ' + this.left.returnHTMLtag() + ' class="nav navbar-nav">\
        </ul>\
        <ul ' + this.right.returnHTMLtag() + '  class="nav navbar-nav navbar-right">\
        </ul>\
    </div>\
  </div>\
</nav>'
            }
            if (options.addTo) options.addTo.add(this)
            return this
        }
        , dropDownGroup: function (options) {
            if (!options) options = {}
            if (options.title) this.optionalTitle = options.title
            else this.optionalTitle = ''
            this.main = new thisBSJS.tag()
            this.title = new thisBSJS.tag()
            this.body = new thisBSJS.tag()
            this.create = function () {
                return '\
        <li  ' + this.main.returnHTMLtag() + ' class="dropdown">\
          <a  ' + this.title.returnHTMLtag() + '  class="dropdown-toggle" data-toggle="dropdown" href="#">' + this.optionalTitle + '<span class="caret"></span></a>\
          <ul  ' + this.body.returnHTMLtag() + ' class="dropdown-menu">\
          </ul>\
        </li>'
            }
            if (options.addTo) options.addTo.add(this)
        }
        , dropDownItem: function (options) {
            this.body = new thisBSJS.tag()
            if (!options) options = {}
            if (options.title) this.optionalTitle = options.title
            else this.optionalTitle = ''
            if (options.onClick) this.body.setonClick(options.onClick)
            this.create = function () {
                return '\
  <li ' + this.body.returnHTMLtag() + '><a href="#">' + this.optionalTitle + '</a></li>'
            }
            if (options.addTo) options.addTo.add(this)
        }
    }
    this.modal = function (options) {
        var thisModal = this
        if (!options) options = {}
        if (options.title) this.optionalTitle = options.title
        else this.optionalTitle = ''
        this.main = new thisBSJS.tag()
        this.header = new thisBSJS.tag()
        this.body = new thisBSJS.tag()
        this.footer = new thisBSJS.tag()
        this.create = function () {
            return '\
<div id="' + thisModal.main.id + '" class="modal fade" role="dialog">\
  <div class="modal-dialog">\
    <div class="modal-content">\
      <div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal">&times;</button>\
        <div  ' + thisModal.header.returnHTMLtag() + ' >\
            <h4 class="modal-title">' + thisModal.optionalTitle + '</h4>\
        </div>\
      </div>\
      <div ' + thisModal.body.returnHTMLtag() + ' class="modal-body">\
      </div>\
      <div  ' + thisModal.footer.returnHTMLtag() + ' class="modal-footer">\
      </div>\
    </div>\
  </div>\
</div>'
        }
        this.show = function () {
            thisModal.main.jQ().modal('show')
        }
        this.hide = function () {
            thisModal.main.jQ().modal('hide')
        }
        this.toggle = function () {
            thisModal.main.jQ().modal('toggle')
        }
        if (options.addTo) options.addTo.add(this)
        return this
    }
    this.button = function (options) {
        if (!options) options = {}
        if (options.title) this.optionalTitle = options.title
        else this.optionalTitle = ''
        var thisButton = this
        this.main = new thisBSJS.tag()
        if (options.onClick) this.main.setonClick(options.onClick)
        this.create = function () {
            return '\
<button ' + thisButton.main.returnHTMLtag() + ' type="button" class="btn">' + thisButton.optionalTitle + '</button>'
        }
        if (options.addTo) options.addTo.add(this)
        return this
    }
    this.panel = function (options) {
        var thisPanel = this
        if (!options) options = {}
        if (options.title) this.optionalTitle = options.title
        else this.optionalTitle = ''
        this.main = new thisBSJS.tag()
        this.heading = new thisBSJS.tag()
        this.body = new thisBSJS.tag()
        this.primary = function () {
            thisPanel.main.element().className = 'panel panel-default'
        }
        this.danger = function () {
            thisPanel.main.element().className = 'panel panel-danger'
        }
        this.create = function () {
            return '\
<div ' + thisPanel.main.returnHTMLtag() + ' class="panel panel-default">\
  <div ' + thisPanel.heading.returnHTMLtag() + ' class="panel-heading">' + thisPanel.optionalTitle + '</div>\
  <div ' + thisPanel.body.returnHTMLtag() + ' class="panel-body"></div>\
</div>'
        }
        if (options.addTo) options.addTo.add(this)
        return this
    }
    this.tag = function () {
        var thisTag = this
        this.id = thisBSJS.newId()
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
            thisBSJS.functions[thisTag.id] = fnc
        }
        this.get = function () {
            return thisTag.jQ.html()
        }
        this.add = function (obj) {
            thisTag.jQ().append(obj.create())
        }
        this.addAll = function (arr) {
            arr.forEach(function (obj) {
                thisTag.jQ().append(obj.create())
            })
        }
        this.returnHTMLtag = function () {
            return 'id="' + thisTag.id + '" onClick="' + thisBSJS.name + '.functions[' + "'" + thisTag.id + "'" + ']()"'
        }
        this.setonClick(function () { })
        return this
    }
    this.iframe = function (options) {
        if (!options) options = {}
        if (options.source) this.optionalSource = options.source
        else this.optionalSource = ''
        var thisiframe = this
        this.main = new thisBSJS.tag()
        this.name = 'iframe_' + this.main.id
        this.create = function () {
            return '<iframe id="' + thisiframe.main.id + '" height="100%" width="100%" src="' + thisiframe.optionalSource + '" width name="' + thisiframe.name + '"></iframe>'
        }
        this.setSource = function (src) {
            thisiframe.main.jQ().attr('src', src)
        }
        if (options.addTo) options.addTo.add(this)
        return this
    }
    this.create = function () {
        thisBSJS.body = new thisBSJS.tag()
        $(document.getElementsByTagName('body')[0]).html('<div id ="' + thisBSJS.body.id + '" style="height: 100%;width: 100%;position: absolute;" ></div>')
    }
    this.create()
    return this
}