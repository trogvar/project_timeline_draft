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

function ProjectEvent(title, type, date, desc) {
    this.title = title || "no title";
    this.type = type;
    this.date = date || new Date();
    this.desc = desc || "";
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
        new ProjectEvent("Design delivery", eventTypes.input_received, "2014-07-08", "Final designs were approved by the customer & delivered to dev-team"),
        new ProjectEvent("Kick-off with the team", eventTypes.custom, "2014-07-03", "Kick-off meeting was held with the team"),
        new ProjectEvent("Pencil planning", eventTypes.planning, "2014-07-04", "Pencil planning has been created and sent to the customer"),
        new ProjectEvent("Product import received", eventTypes.input_received, "2014-07-03", "Data for product import has been received from the customer"),
        new ProjectEvent("PSP creds", eventTypes.input_received, "2014-07-10", "Received PSP credentials for test account"),
        new ProjectEvent("Initial beta", eventTypes.deployment_beta, "2014-09-03", "Beta has been created and initial deployment was done"),
        new ProjectEvent("Pre-live", eventTypes.deployment_prelive, "2014-10-06", "Pre-live has been setup"),
        new ProjectEvent("Live", eventTypes.deployment_live, "2014-11-03", "Live deployment was done"),
        new ProjectEvent("Pre-live date set", eventTypes.planning, "2014-07-06", "Pre-live date has been discussed and set as soft-deadline"),
        new ProjectEvent("Live deadline", eventTypes.planning, "2014-07-06", "Hard deadline has been specified for live delivery")
    ]

}

function CreateTimegliderEvents(events) {

    function CreateEventId(number) {
        return number < 10 ? "00" + number : number < 100 ? "0" + number : number;
    }

    var result = [];
    var counter = 1;
    for (i in events) {
        var e = events[i];
        var event = {};
        event.id = e.type.id + CreateEventId(counter++);
        event.icon = e.type.icon;
        event.title = e.title;
        event.description = e.desc;
        event.startdate = e.date;
        event.enddate = e.date;
        event.date_display = "day";

        result.push(event);
    }
    return result;
}
function CreateTimegliderObj(src, id, focus_date) {
    var result = {};
    result.id = id;
    result.title = src.title;
    result.focus_date = focus_date || new Date();
    result.initial_zoom = 43;
    result.timezone = "+03:00";
    result.icon_folder = "icons/"
    result.events = CreateTimegliderEvents(src.events);

    return result;
}



var timelines = [ CreateTimegliderObj(projectX, "project_x", "2014-08-01")];
