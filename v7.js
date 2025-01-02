const { mouse, Point, keyboard, Button } = require("@nut-tree-fork/nut-js");


mouse.config.mouseSpeed = 20;
keyboard.config.autoDelayMs = 50; 

async function performActions() {
    try {
        console.log("Starting actions in 3 seconds...");
        await new Promise(resolve => setTimeout(resolve, 3000)); 

        console.log("Executing actions...");
     
        const actions = [
          
           

        ];

        
        for (const action of actions) {
            switch (action.type) {
                case "mouseMove":
                    console.log(`Moving mouse to: ${action.position.x}, ${action.position.y}`);
                    await mouse.move(action.position);
                    break;

                case "mouseClick":
                    console.log("Clicking mouse");
                    await mouse.click(action.button || Button.LEFT);
                    break;

                    case "keyboardType":
    for (const char of action.text) {
        if (char === '\\' && action.text[action.text.indexOf(char) + 1] === 'n') {
            await keyboard.pressKey(Key.Enter);
            await keyboard.releaseKey(Key.Enter);
            
            continue;
        }
        if (char === 'n' && action.text[action.text.indexOf(char) - 1] === '\\') {
            continue;
        }
        await keyboard.type(char);
        await sleep(10);
    }
    break;
                case "wait":
                    console.log(`Waiting for ${action.duration} ms`);
                    await new Promise(resolve => setTimeout(resolve, action.duration));
                    break;

                default:
                    console.error("Unknown action type:", action.type);
            }
        }

        console.log("All actions completed successfully!");
    } catch (error) {
        console.error("Error during execution:", error);
    }
}


performActions();
