var bsjs = new BSJS('bsjs')
var MyModal = new bsjs.modal({
    title: 'My First Modal'
    , addTo: bsjs.body
})
var navBar = new bsjs.nav.bar({
    addTo: bsjs.body
    , title: 'Wits Settings'
})
var AdminPages_dropDownGroup = new bsjs.nav.dropDownGroup({
    addTo: navBar.left
    , title: 'Recent'
})
var WitsSettings_dropDownItem = new bsjs.nav.dropDownItem({
    addTo: AdminPages_dropDownGroup.body
    , title: 'Wits Settings'
    , onClick: MyModal.show
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
    title: 'My Panel'
    , addTo: bsjs.body
})
panel.body.add(button)
var myiframe = new bsjs.iframe({
    addTo: bsjs.body
})