const sentence = 'maybe i should have listened to zarathustra';
let time = 0
for(const char of sentence) {
  time += 150;
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
};
setTimeout(() => {
  process.stdout.write('\n');
}, time += 150);