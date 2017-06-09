BSJS.init()
var navbar = new BSJS.nav.bar({
    title: 'Monkey CRM'
    , addTo: BSJS.tags.main
    , left: [new BSJS.nav.dropDownGroup({
        var: 'Reports'
        , title: 'Reports'
        , body: [new BSJS.nav.dropDownItem({
            body: 'Overview of period'
            , onClick: function () {
                alert('Working')
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Detail of each lead'
            , onClick: function () {
                alert('Second Working')
            }
        })]
    }), new BSJS.nav.dropDownGroup({
        var: 'View'
        , title: '<<View.tit>>'
        , body: [new BSJS.nav.dropDownItem({
            body: 'All'
            , onClick: function () {
                API.getObject("/API/getNamesOfWits/", {}, function (ob) { console.log(ob); alert('got it') })
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Closest to finish'
            , onClick: function () {
                API.postToWits(obb)
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Next follow up'
            , onClick: function () {
                alert('Second Working')
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Installs'
            , onClick: function () {
                alert('Second Working')
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Lost'
            , onClick: function () {
                alert('Second Working')
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Arc First'
            , onClick: function () {
                alert('Second Working')
            }
        }), new BSJS.nav.dropDownItem({
            body: 'Sold'
            , onClick: function () {
                alert('Second Working')
            }
        })]
    })]
})

var obb = {
    h: 1
}

var objForWorker = {
    Title: "This is the title"
    , Antoher_string: "This is another string"
    , objTest: {
        dummyProp: 'TrueThat'
        , anotherDummy: 'YesSir'
        , ArrayProp: [{
            one: 1
        }, {
            two: 2
        }, {
            three: 3
        }]
    }
}
var objW = new BSJS.objectWorker({
    obj: objForWorker
    , addTo: BSJS.main
})
