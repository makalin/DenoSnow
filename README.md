# DenoSnow

DenoSnow is a Deno-based terminal application designed to track and manage snow depth data for various mountains. It offers an interactive prompt to list mountains, add new ones, or update snow depth information with a simple user-friendly interface.

## Features

- List all mountains with their altitude, snow depth, and last update.
- Add a new mountain with its altitude and snow depth.
- Update the snow depth for an existing mountain.
- Easy-to-use interactive terminal interface using Cliffy's `Prompt` and `Table` modules.

## Prerequisites

- Deno (version 1.0+)

## Installation

To run DenoSnow, ensure you have Deno installed. You can install Deno using the following command:

```bash
curl -fsSL https://deno.land/install.sh | sh
```

## Usage

1. Clone the repository or download the script.
2. Run the application using Deno:

```bash
deno run --allow-net --allow-read --allow-write --unstable denosnow.ts
```

### Options in the Interactive Prompt

- **List All Mountains**: Displays a table with the mountain names, altitudes, snow depths, and the last update date.
- **Add New Mountain**: Prompts you to enter a new mountain's details (name, altitude, snow depth) and adds it to the list.
- **Update Snow Depth**: Allows updating the snow depth of an existing mountain from the list.
- **Exit**: Terminates the program.

## Code Overview

### Data Structure

The `MountainData` interface defines the structure of mountain data:

```typescript
interface MountainData {
    name: string;
    altitude: number;
    snowDepth: number;
    lastUpdate: string;
}
```

### Core Functions

1. **Main Function**: Controls the main program loop, displaying an interactive menu for user actions.
2. **Display Function**: Uses a table to display the list of mountains and their data.
3. **Add Function**: Prompts the user to add a new mountain to the list.
4. **Update Function**: Allows the user to update the snow depth of a specified mountain.

### Permissions

The application requires permissions for:

- **Network Access** (`--allow-net`)
- **File Read/Write Access** (`--allow-read --allow-write`)
- **Unstable Features** (`--unstable`)

## Example

```bash
# Run the application
deno run --allow-net --allow-read --allow-write --unstable denosnow.ts
```

### Sample Interaction

```plaintext
Mountain Snow Depth Tracking System
===================================
What would you like to do?
> List all mountains
  Add a new mountain
  Update snow depth
  Exit
```

## License

This project is licensed under the MIT License.
