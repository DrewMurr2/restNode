var nav = {
    index: 0,
    functions: {},
    bar: function (options) {
        if (!options) options = {}

        this.header = options.header || ""

        this.body = options.body || []

        this.show = function () {
            return '\
<nav class="navbar navbar-inverse">\
  <div class="container-fluid">\
    <div class="navbar-header">\
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span> \
      </button>\
      <a class="navbar-brand" href="#">' + this.header + '</a>\
    </div>\
    <div class="collapse navbar-collapse" id="myNavbar">\
      <ul class="nav navbar-nav">\
        <li class="active"><a href="#">Home</a></li>\
        <li><a href="#">Page 1</a></li>\
        <li><a href="#">Page 2</a></li> \
        <li><a href="#">Page 3</a></li> \
      </ul>\
      <ul class="nav navbar-nav navbar-right">\
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>\
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>\
      </ul>\
    </div>\
  </div>\
</nav>'
        }
    },

    dropDownGroup: function (options) {
        if (!options) options = {}
        this.title = options.title || "Drop Down"
        this.id = "navDropDown" + nav.index++
        this.html = function () { document.getElementById(this.id) }
        this.jQ = function () { $(document.getElementById(this.id)) }
        this.add = function (string) {
            this.jQ.append(string)

            return '\
     <ul class="nav navbar-nav" id="' + this.id + '">\
        <li class="active"><a href="#">' + this.title + '</a></li>\
      </ul>'
        }
    },

    dropDownItem: function (options) {
        if (!options) options = {}
        this.title = options.title || "Title"
        this.id = "navDropDown" + nav.index++
        this.html = function () { document.getElementById(this.id) }
        this.jQ = function () { $(document.getElementById(this.id)) }
        this.setOnClick = function (f) {
            nav.functions[this.id] = f
        }

        this.onClick = options.onClick || function () { alert('Nothing set') }
        this.setOnClick(this.onClick)

    }









}


new nav.navbar({
    Title: "Welcome", Body: [new nav.dropDownGroup({
        Title: "sd", onClick: function () {
            for (i = 0; i > 10; i++) {
                alert(i * 10)
            }
        }
    })]
})


