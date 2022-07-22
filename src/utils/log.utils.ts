export class LogUtils {
  public static print(msg: string): void {
    if (process.env.DEBUG != '1') return;

    console.log(msg);
  }

  public static breakLine(): void {
    if (process.env.DEBUG != '1') return;

    console.log("\n============================================\n");
  }
}