export class NumberUtils {
  public static random(min: number, max: number): number {
    max = max + 1;
    return Math.floor(Math.random() * (max - min) + min);
  }

  public static randomDefinedNumbers(max: number): number[] {
    let out = [];
    let tmp = [];

    for (let i = 1; i <= max; i++) {
      tmp.push(i);
    }

    while(tmp.length > 0) {
      const random = NumberUtils.random(0, tmp.length - 1);

      out.push(tmp[random]);
      tmp.splice(random, 1);
    }

    return out;
  }
}