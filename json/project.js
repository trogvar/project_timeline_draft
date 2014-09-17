var eventTypes = {
    planning:{
        id: "planning",
        title: "Planning",
        icon: "planning.png",
        desc: "Happens when some planning has been agreed with the customer"
    },
    input_received: {
        id: "input_event",
        title: "Input event",
        icon: "input_event.png",
        desc: "Happens when some input has been delivered to the team"
    },

    demo_internal: {
        id: "demo_internal",
        title: "Internal demo",
        icon: "demo_internal.png",
        desc: "Demo for CC/TC (internal)"
    },

    demo_external: {
        id: "demo_external",
        title: "Demo with customer",
        icon: "demo_external.png",
        desc: "Demo with customer present"
    },

    deployment_beta: {
        id: "deployment_beta",
        title: "Beta deployment",
        icon: "deployment_beta.png",
        desc: "Beta deployment"
    },

    deployment_prelive: {
        id: "deployment_prelive",
        title: "Prelive deployment",
        icon: "deployment_prelive.png",
        desc: "Prelive deployment"
    },

    deployment_live: {
        id: "deployment_live",
        title: "Live deployment",
        icon: "deployment_live.png",
        desc: "Live deployment"
    },

    testing_interfaces: {
        id: "testing_interfaces",
        title: "Interface testing",
        icon: "testing_interfaces.png",
        desc: "Testing of intefaces"
    },

    testing_integration: {
        id: "testing_integration",
        title: "Integration testing",
        icon: "testing_integration.png",
        desc: "Integration testing"
    },

    custom: {
        id: "custom",
        title: "Custom event",
        icon: "custom.png",
        desc: "Custom event"
    }
};

function ProjectEvent(title, type, desc, startdate, enddate, extras) {
    this.title = title || "no title";
    this.type = type;
    this.desc = desc || "";
    this.startdate = startdate || new Date();
    if (enddate != undefined)
        this.enddate = enddate;

    for (var key in extras)
        this[key] = extras[key];
}

var deadlineTypes = ["soft", "hard"];

var projectX = {
    title: "Project X",
    createdOn: "2014-07-01",
    totalBudget: 460, // get from Gemini
    spentBudget: 298, // get from Gemini

    deadlines: [
        {
            type: "soft",
            date: "2014-10-15",
            title: "Prelive delivery",
            desc: "Prelive is expected by customer no later than 15th of October, so they can start content entry"
        },

        {
            type: "hard",
            date: "2014-11-07",
            title: "Final deadline",
            desc: "Live should be delivered no later than 7th of November"
        }
    ],

    events: [
        new ProjectEvent("Design delivery", eventTypes.input_received, "Final designs were approved by the customer & delivered to dev-team", "2014-07-08"),
        new ProjectEvent("Kick-off with the team", eventTypes.custom, "Kick-off meeting was held with the team", "2014-07-03"),
        new ProjectEvent("Pencil planning", eventTypes.planning, "Pencil planning has been created and sent to the customer", "2014-07-04"),
        new ProjectEvent("Product import received", eventTypes.input_received, "Data for product import has been received from the customer", "2014-07-03"),
        new ProjectEvent("PSP creds", eventTypes.input_received, "Received PSP credentials for test account", "2014-07-10"),
        new ProjectEvent("Initial beta", eventTypes.deployment_beta, "Beta has been created and initial deployment was done", "2014-09-03", "2014-11-01", {"span_color":"khaki"}),
        new ProjectEvent("Pre-live", eventTypes.deployment_prelive, "Pre-live has been setup", "2014-10-06"),
        new ProjectEvent("Live", eventTypes.deployment_live, "Live deployment was done", "2014-11-03"),
        new ProjectEvent("Pre-live date set", eventTypes.planning, "Pre-live date has been discussed and set as soft-deadline", "2014-07-06"),
        new ProjectEvent("Live deadline", eventTypes.planning, "Hard deadline has been specified for live delivery", "2014-07-06"),
        new ProjectEvent("Integration testing", eventTypes.testing_integration, "Testing integration website+interfaces+PSP", "2014-10-11", "2014-10-18",  {"span_color":"orange"})
    ]

}

function CreateTimegliderEvents(events) {

    function CreateEventId(number) {
        return number < 10 ? "00" + number : number < 100 ? "0" + number : number;
    }

    var result = [];
    var counter = 1;
    for (var i in events) {
        var e = events[i];
        var event = {};
        event.id = e.type.id + CreateEventId(counter++);
        event.title = e.title;
        event.description = e.desc;
        event.startdate = e.startdate;

        if (e.enddate != undefined)
            event.enddate = e.enddate;

        event.date_display = "day";
        event.importance = 30;
        event.icon = e.type.icon;

        if (e.span_color != undefined)
            event.span_color = e.span_color;

        if (e.css_class != undefined)
            event.css_class = e.css_class;

        result.push(event);
    }
    return result;
}
function CreateTimegliderObj(src, id, focus_date) {
    var result = {};
    result.id = id;
    result.title = src.title;
    result.focus_date = focus_date || new Date();
    result.initial_zoom = 25;
    result.timezone = "+03:00";
    result.icon_folder = "icons/";
    result.collapsed = true;
    result.events = CreateTimegliderEvents(src.events);
    result.legend = [];
    for(var x in eventTypes) {
        var t = eventTypes[x];
        result.legend.push({"title":t.title, "icon":t.icon});
    }

    return result;
}



var timelines = [ CreateTimegliderObj(projectX, "project_x", "2014-09-01")];
