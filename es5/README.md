# @brycemarshall/sleep

A function that causes the current execution context to be suspended (thereby surrendering execution to any scheduled background tasks such as timeout, interval, and immediate events) for the specified duration.

## Installation (Latest Build)

npm install @brycemarshall/sleep

## IMPORTANT! Installation (Versioned Builds)

The @brycemarshall/sleep function is published on NPM with the following builds:

version 3 -- Full native support for the ES2017 async keyword and await expression (the most compact build).
npm install @brycemarshall/sleep@latest 
OR
npm install @brycemarshall/sleep@es2017
OR
npm install @brycemarshall/sleep@"^3"

version 2 -- Downlevelled to support ES2015 runtimes using generator functions and the yield keyword.
npm install @brycemarshall/sleep@es2015 
OR
npm install @brycemarshall/sleep@"^2"

version 1 -- Downlevelled to support ES3/ES5 runtimes using generator and awaiter functions (the least compact build - you'll probably need this build if you're targeting a browser).
npm install @brycemarshall/sleep@es5 
OR
npm install @brycemarshall/sleep@"^1"

## The module exports the following:

```ts
/**
 * A function that causes the current execution context to be suspended (thereby surrendering execution to any queued background events such as timeout, interval, and immediate events) for the specified duration.
 * @param duration The duration for which execution will be suspended.
 */
export declare function sleep(duration: number): Promise<void>;
```

## Usage

``` ts
import { sleep } from '@brycemarshall/sleep';

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
```
## Contributors

 - Bryce Marshall

## MIT Licenced
