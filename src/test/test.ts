import { sleep } from '../index';

test();

async function test() {
    testSleep().then(async () => {
        console.log("");                
        await testSleep();
        console.log("With 'await', both contexts block until the sleep period has elapsed.");
    });
    console.log("... without 'await', the immediate context continues while the testSleep() function blocks internally until the sleep period has elapsed.");
}

async function testSleep() {
    console.log("Sleeping for 3 seconds");
    await sleep(3000);
    console.log("Awake")
}