function complexArrayCalculation(size) {
  let arr = new Array(size).fill(0).map((_, i) => Math.random() * i);

  for (let j = 0; j < 100; j++) {
    arr = arr.map(x => Math.sin(x) * Math.sqrt(x + 1));
  }

  return arr.slice(0, 5); // 返回前5个值用于展示
}

let count = 0;
let totalDuration = 0;

while (true) {
  const startTime = performance.now(); // 开始计时
  const result = complexArrayCalculation(10000);
  const duration = performance.now() - startTime; // 单次耗时

  count++;
  totalDuration += duration;

  if (count === 20) {
    postMessage({
      result,
      totalDuration: totalDuration,
      averageDuration: (totalDuration / 20).toFixed(2)
    });

    count = 0;
    totalDuration = 0;
  }

  setTimeout(() => {}, 10); // 控制频率
}

