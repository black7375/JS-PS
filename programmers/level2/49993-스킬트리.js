function solution(skill, skill_trees) {
  const regex = new RegExp(`[^${skill}]`, 'g');

  return skill_trees
    .map(skill_tree => skill_tree.replace(regex, ''))
    .filter(depend_tree => {
      return skill.indexOf(depend_tree) === 0 || depend_tree === "";
    })
    .length;
}
