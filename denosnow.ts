import { parse } from "https://deno.land/std/flags/mod.ts";
import { Table } from "https://deno.land/x/cliffy/table/mod.ts";
import { Input, Select } from "https://deno.land/x/cliffy/prompt/mod.ts";

interface MountainData {
    name: string;
    altitude: number;
    snowDepth: number;
    lastUpdate: string;
}

const mountainsData: MountainData[] = [
    {
        name: "Uludağ",
        altitude: 2543,
        snowDepth: 150,
        lastUpdate: "2024-02-15"
    },
    {
        name: "Erciyes",
        altitude: 3917,
        snowDepth: 180,
        lastUpdate: "2024-02-15"
    },
    {
        name: "Palandöken",
        altitude: 3176,
        snowDepth: 200,
        lastUpdate: "2024-02-15"
    }
];

async function main() {
    console.log("Mountain Snow Depth Tracking System");
    console.log("===================================");

    while (true) {
        const action = await Select.prompt({
            message: "What would you like to do?",
            options: [
                { name: "List all mountains", value: "list" },
                { name: "Add a new mountain", value: "add" },
                { name: "Update snow depth", value: "update" },
                { name: "Exit", value: "exit" }
            ],
        });

        switch (action) {
            case "list":
                displayMountains();
                break;
            case "add":
                await addNewMountain();
                break;
            case "update":
                await updateSnowDepth();
                break;
            case "exit":
                console.log("Exiting the program...");
                Deno.exit(0);
        }
    }
}

function displayMountains() {
    const table = new Table()
        .header(["Mountain Name", "Altitude (m)", "Snow Depth (cm)", "Last Update"])
        .body(mountainsData.map(mountain => [
            mountain.name,
            mountain.altitude.toString(),
            mountain.snowDepth.toString(),
            mountain.lastUpdate
        ]));

    table.render();
}

async function addNewMountain() {
    const name = await Input.prompt("Mountain name");
    const altitude = parseInt(await Input.prompt("Altitude (meters)"));
    const snowDepth = parseInt(await Input.prompt("Snow depth (cm)"));
    const lastUpdate = new Date().toISOString().split('T')[0];

    mountainsData.push({
        name,
        altitude,
        snowDepth,
        lastUpdate
    });

    console.log(`${name} successfully added!`);
}

async function updateSnowDepth() {
    const mountainName = await Select.prompt({
        message: "Which mountain's snow depth would you like to update?",
        options: mountainsData.map(m => m.name),
    });

    const mountain = mountainsData.find(m => m.name === mountainName);
    if (mountain) {
        const newDepth = parseInt(await Input.prompt("New snow depth (cm)"));
        mountain.snowDepth = newDepth;
        mountain.lastUpdate = new Date().toISOString().split('T')[0];
        console.log(`Snow depth for ${mountainName} has been updated!`);
    }
}

if (import.meta.main) {
    main();
}
