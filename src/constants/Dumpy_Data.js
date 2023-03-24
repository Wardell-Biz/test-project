export const data = [
    {
        Name: "Load Balancer 3",
        Protocol: "HTTP",
        Port: 3000,
        Rule: "Round robin",
        "Attached Groups": "Kevins VM Groups",
        Status: "Disabled",
    },
    {
        Name: "Load Balancer 1",
        Protocol: "HTTP",
        Port: 443,
        Rule: "Round robin",
        "Attached Groups": "Maureens VM Groups",
        Status: "Starting",
    },
    {
        Name: "Load Balancer 2",
        Protocol: "HTTP",
        Port: 80,
        Rule: "DNS delegation",
        "Attached Groups": "Andrews VM Groups",
        Status: "Active",
    },
    {
        Name: "Load Balancer 6",
        Protocol: "HTTP",
        Port: 3000,
        Rule: "Round robin",
        "Attached Groups": "Marcs VM Groups",
        Status: "Disabled",
    },
    {
        Name: "Load Balancer 4",
        Protocol: "HTTP",
        Port: 443,
        Rule: "Round robin",
        "Attached Groups": "Mels VM Groups",
        Status: "Starting",
    },
    {
        Name: "Load Balancer 5",
        Protocol: "HTTP",
        Port: 80,
        Rule: "DNS delegation",
        "Attached Groups": "Ronjas VM Groups",
        Status: "Active",
    },
];

export const columns = [
    "Name",
    "Protocol",
    "Port",
    "Rule",
    "Attached Groups",
    "Status",
];