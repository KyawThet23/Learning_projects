const { isMainThread,Worker } = require('worker_threads');

if(isMainThread){
  new Worker(__filename);
}else{
  console.log('worker');
}  