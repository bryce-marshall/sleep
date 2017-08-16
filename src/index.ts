/**
 * A function that causes the current execution context to be suspended (thereby surrendering execution to any queued background events such as timeout, interval, and immediate events) for the specified duration.
 * @param duration The duration for which execution will be suspended.
 */
export async function sleep(duration: number) {
    if (!duration)
        duration = 0;

    await new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}
