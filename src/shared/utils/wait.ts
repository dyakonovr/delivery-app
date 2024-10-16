export async function wait(timeInMs: number) {
  new Promise((resolve) => setTimeout(resolve, timeInMs));
}
