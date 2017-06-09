var MyObjs = {
    leads: []
    , leadsData: []
    , lead: function (company, obj) {
        this.name = company.name
        this.id = company.id
        this.tags = []
        var thisLead = this
        this.hiddenProperties = {}
        if (company.tags.tag.name) this.tags.push(company.tags.tag.name)
        else company.tags.tag.forEach(function (t) {
            thisLead.tags.push(t.name)
            thisLead.tags[t.name] = 1
        })
        if (isString(company.background)) this.background = company.background
        if (obj && obj.updatedDate) this.updatedDate = obj.updatedDate
        else this.updatedDate = (new Date()).getDate()
        if (obj && obj.Phases) this.Phases = obj.Phases
        else {
            this.Phases = []
            this.Phases.push(new phase({
                name: "Cold"
                , targetDuration: 60
            }))
            this.Phases.push(new phase({
                name: "Interested"
                , targetDuration: 14
            }))
            this.Phases.push(new phase({
                name: "Demonstrations"
                , targetDuration: 8
            }))
            this.Phases.push(new phase({
                name: "TermsAndConditions"
                , targetDuration: 4
            }))
            this.Phases.push(new phase({
                name: "Install"
                , targetDuration: 18
            }))
            this.Phases.push(new phase({
                name: "Training"
                , targetDuration: 6
            }))
            this.Phases.push(new phase({
                name: "PaymentConfirmation"
                , targetDuration: 2
            }))
        }
        if (obj && obj.Install) this.Install = obj.Install
        else {
            this.Install = {}
            this.Install.Phases = []
            this.Install.Phases.push(new phase({
                name: "accessToServer"
                , targetDuration: 2
            }))
            this.Install.Phases.push(new phase({
                name: "installQuestionsAnswered"
                , targetDuration: 2
            }))
            this.Install.Phases.push(new phase({
                name: "configuredFirmSettings"
                , targetDuration: 2
            }))
            this.Install.Phases.push(new phase({
                name: "syncNeedles"
                , targetDuration: 2
            }))
            this.Install.Phases.push(new phase({
                name: "testProduction"
                , targetDuration: 2
            }))
            this.Install.Phases.push(new phase({
                name: "scheduleTraining"
                , targetDuration: 2
            }))
        }
        if (obj && obj.extraProperties) this.extraProperties = obj.extraProperties
        else this.extraProperties = {
            source: ""
        }

        if (!obj) API.createObj(this)
        API.retrieveNotes(this)
        API.retrieveTasks(this)

        function phase(options) {
            this.name = options.name || null, this.start = options.start || null, this.end = options.end || null, this.targetDuration = options.targetDuration || null
        }

    }
    , note: function (raw) {
        if (raw.body) this.body = raw.body
        if (raw['created-at']) this.date = new Date(raw['created-at'])
    }
    , task: function (raw) {
        if (raw.body) this.body = raw.body
        if (raw['due-at']) this.date = new Date(raw['due-at'])
    }
}