BSJS.nav = {
    bar: function (options) {
        if (!options) options = {}
        options.template = '\
<nav {{main.returnHTMLtag}} class="navbar navbar-inverse">\
  <div class="container-fluid">\
    <div class="navbar-header">\
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#{{body.id}}">\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
      </button>\
      <a  {{title.returnHTMLtag}} class="navbar-brand" href="#"></a>\
    </div>\
    <div class="collapse navbar-collapse" {{body.returnHTMLtag}}>\
        <ul {{left.returnHTMLtag}} class="nav navbar-nav">\
        </ul>\
        <ul {{right.returnHTMLtag}}  class="nav navbar-nav navbar-right">\
        </ul>\
    </div>\
  </div>\
</nav>'
        var thisBar = BSJS.inherit(this, new BSJS.obj(options))


        return this
    }
    , dropDownGroup: function (options) {
        if (!options) options = {}
        if (options.title) this.optionalTitle = options.title
        else this.optionalTitle = ''
        this.main = new BSJS.tag()
        this.title = new BSJS.tag()
        this.body = new BSJS.tag()
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
        this.body = new BSJS.tag()
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

BSJS.panel = function (options) {
    if (!options) options = {}
    options.template = '\
<div {{main.returnHTMLtag}} class="panel panel-default" >\
  <div {{heading.returnHTMLtag}} class="panel-heading">Panel Heading</div>\
    <div {{body.returnHTMLtag}} class="panel-body" ></div >\
    <div {{footer.returnHTMLtag}} class="panel-footer">Panel Footer</div>\
</div >\
'
    var thisPanel = BSJS.inherit(this, new BSJS.obj(options))

    this.primary = function () {
        thisPanel.tags.main.element().className = 'panel panel-default'
    }
    this.danger = function () {
        thisPanel.tags.main.element().className = 'panel panel-danger'
    }
    return this
}

BSJS.span = function (options) {
    if (!options || jQuery.type(options) === "string") {
        options = {
            text: options
        }
    } else {
        options.text = ''
    }
    options.template = '<span {{main.returnHTMLtag}}>' + options.text + '</span>'
    var thisPanel = BSJS.inherit(this, new BSJS.obj(options))
    return this
}