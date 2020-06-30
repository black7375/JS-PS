function skill_depend(lowI, highI) {
  if((lowI === -1) || (highI === -1)) {
    return (highI === -1)
         ? false
         : true;
  } else {
    return lowI > highI;
  }
}

function solution(skill, skill_trees) {
  const depend  = skill.split('');
  const dependL = depend.length - 1;

  return skill_trees.filter(_skill_tree => {
    const skill_tree = _skill_tree.split('');
    const skill_check = depend.map(sk => skill_tree.indexOf(sk));

    for(let i = 0; i < dependL; i++) {
      const lowI  = skill_check[i];
      const highI = skill_check[i + 1];
      console.log(lowI + " " + highI);
      if(skill_depend(lowI, highI))
        return false;
    }
    return true;
  }).length;
}
