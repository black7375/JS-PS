function create_truck(weight, time) {
  return ({
    w: weight,
    t: time
  });
}

function solution(bridge_length, weight, truck_weights) {
  const truck_w = [...truck_weights].reverse();
  let bridge  = [];
  let count = 0;

  do {
    if(bridge.length > 0) {
      const firstT = bridge[0].t - 1;
      if(firstT === 0) weight += bridge.shift().w;
    }
    bridge = bridge.map(truck => create_truck(truck.w, truck.t - 1));

    if(truck_w[truck_w.length - 1] <= weight) {
      const truckW = truck_w.pop();
      weight -= truckW;
      bridge.push(create_truck(truckW, bridge_length));
    }
    count++;
  } while(bridge.length > 0)
    return count;
}
