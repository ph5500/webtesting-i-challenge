module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const item = {
  name: "phil",
  durability: 10,
  enhancement: 20
}

function succeed(item) {
  console.log('item.enhance', item.enhancement)
  if (item.enhancement < 20) {
    let enhance = ++item.enhancement
    return { ...item, enhancement: enhance }
  } else if (item.enhancement == 20) {
    return item;
  } else {
    let enhance = 20
    return { ...item, enhancement: enhance }
  }
}
// console.log("succeed", succeed(item));
function fail(item) {
  if (item.enhancement < 15) {
    let durab = item.durability - 5;
    console.log('durab fail', durab)
    return { ...item, durability: durab }
  } else if (item.enhancement === 15) {
    let durab = item.durability - 10;
    console.log('durab fail', durab)
    return { ...item, durability: durab }
  } else if (item.enhancement >= 16) {
    let enhance = item.enhancement - 1;
    let durab = item.durability - 10;
    console.log(enhance, durab)
    return { ...item, enhancement: enhance, durability: durab }
  } else {
    return item;
  }
}

function repair(item) {
  if (item.durability < 100) {
    return { ...item, durability: 100 };
  } else {
    let dura = 100
    return { ...item, durability: dura }
  }
}

// console.log("repair", repair(item));
function get(item) {
  if (item.enhancement === 0) {
    return item
  } else {
    let nameo = `[+${item.enhancement}] ${item.name}`
    return { ...item };
  }
}