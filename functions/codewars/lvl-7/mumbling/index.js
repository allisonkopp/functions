const accum = s =>
  s
    .split('')
    .map((l, i) => l.toUpperCase() + l.toLowerCase().repeat(i))
    .join('-');

//console.log(accum('abcd')); //"A-Bb-Ccc-Dddd"
//console.log(accum('RqaEzty')); //"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//console.log(accum('ZpglnRxqenU'));
