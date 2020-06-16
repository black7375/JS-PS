function solution(priorities, location) {
  const list = priorities.map((doc, idx)=>({
    index : idx === location,
    order : doc
  }));

  let count = 0;
  while(true) {
    const J = list.shift();
    if(list.some(doc => doc.order > J.order)) {
      list.push(J);
    }
    else{
      count++;
      if(J.index) return count;
    }
  }
}
