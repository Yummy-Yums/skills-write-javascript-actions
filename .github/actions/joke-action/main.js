const getJoke = import("./joke.js");
const core    = import("@actions/core");

async function run() {

    const joke = getJoke.then((module) => {
        console.log(module)
        const j = module.default;
        console.log(j)
      }).catch(error => console.error('Error:', error));
      
    
    (await core).setOutput("joke-output", joke);
    // core.setOutput("joke-output", joke);
    console.log("finished running")
}


run()