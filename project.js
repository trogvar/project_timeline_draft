var eventTypes = {
    planning:{
        title: "Planning",
        icon: "icons/planning.png",
        desc: "Happens when some planning has been agreed with the customer"
    },
    input_received: {
        title: "Input event",
        icon: "icons/input_event.png",
        desc: "Happens when some input has been delivered to the team"
    },

    demo_internal: {
        title: "Internal demo",
        icon: "icons/demo_internal.png",
        desc: "Demo for CC/TC (internal)"
    },

    demo_external: {
        title: "Demo with customer",
        icon: "icons/demo_external.png",
        desc: "Demo with customer present"
    },

    deployment_beta: {
        title: "Beta deployment",
        icon: "icons/deployment_beta.png",
        desc: "Beta deployment"
    },

    deployment_prelive: {
        title: "Prelive deployment",
        icon: "icons/deployment_prelive.png",
        desc: "Prelive deployment"
    },

    deployment_live: {
        title: "Live deployment",
        icon: "icons/deployment_live.png",
        desc: "Live deployment"
    },

    testing_interfaces: {
        title: "Interface testing",
        icon: "icons/testing_interfaces.png",
        desc: "Testing of intefaces"
    },

    testing_integration: {
        title: "Integration testing",
        icon: "icons/testing_integration.png",
        desc: "Integration testing"
    },

    custom: {
        title: "Custom event",
        icon: "icons/custom.png",
        desc: "Custom event"
    }
};

function ProjectEvent(title, type, date, desc) {
    this.title = title || "no title";
    this.type = eventTypes[type] || eventTypes.custom;
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
        },
    ],

    events: [
        new ProjectEvent("Design delivery", eventTypes.input_received, "2014-07-08", "Final designs were approved by the customer & delivered to dev-team"),
        new ProjectEvent("Kick-off with the team", eventTypes.custom, "2014-07-03", "Kick-off meeting was held with the team"),
        new ProjectEvent("Pencil planning", eventTypes.planning, "2014-07-04", "Pencil planning has been created and sent to the customer"),
        new ProjectEvent("Pre-live date set", eventTypes.planning, "2014-07-06", "Pre-live date has been discussed and set as soft-deadline"),
        new ProjectEvent("Live deadline", eventTypes.planning, "2014-07-06", "Hard deadline has been specified for live delivery"),
    ]

}