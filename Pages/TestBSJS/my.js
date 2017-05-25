BSJS.init()
var panel = new BSJS.panel({
    addTo: BSJS.tags.main,
    heading: 'test heading',
    body: [new BSJS.panel({ heading: 'test 1' }), new BSJS.panel({ heading: 'test 2' })],
    footer: new BSJS.panel({ heading: 'test 3' })
})

