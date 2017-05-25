var bsjs = new BSJS('bsjs')
var MyModal = new bsjs.modal({
    title: 'My First Modal'
    , addTo: bsjs.body
})
var navBar = new bsjs.nav.bar({
    addTo: bsjs.body
    , title: 'Admin Console'
})
var AdminPages_dropDownGroup = new bsjs.nav.dropDownGroup({
    addTo: navBar.left
    , title: 'Admin Pages'
})
var WitsSettings_dropDownItem = new bsjs.nav.dropDownItem({
    addTo: AdminPages_dropDownGroup.body
    , title: 'Wits Settings'
    , onClick: function () {
        myiframe.setSource('/pages/WitsSettings')
    }
})
var WellProperties_dropDownItem = new bsjs.nav.dropDownItem({
    addTo: AdminPages_dropDownGroup.body
    , title: 'Well Properties'
    , onClick: MyModal.show
})
var StartStopLogging_dropDownItem = new bsjs.nav.dropDownItem({
    addTo: AdminPages_dropDownGroup.body
    , title: 'Start/Stop Logging'
    , onClick: MyModal.show
})
var button = new bsjs.button({
    title: 'My Button'
    , addTo: AdminPages_dropDownGroup.body
    , onClick: function () {
        alert("It is me!")
    }
})
var panel = new bsjs.panel({
    title: 'My Panel',
    addTo: bsjs.body
})

var myiframe = new bsjs.iframe({
    addTo: bsjs.body
})

var panel2 = new BSJS2.panel({
    title: 'My Panel',
    addTo: bsjs.body
})