// -- Data Utils --
function zip(...rows) {
  return rows[0].map((_, col) => rows.map(row => row[col]));
}

function range(num) {
  return [...Array(num).keys()];
}

function setAdd(set, arr) {
  set.add(arr.toString());
}

// -- Calculation --
function getCombinations(arr, size) {
  if (size === 1) return arr.map((value) => [value]);

  const results = [];
  const arrL    = arr.length;
  for(let i = 0; i < arrL; i++) {
    const fixed        = arr[i];
    const rest         = arr.slice(i + 1);
    const combinations = getCombinations(rest, size - 1);
    const attached     = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  }
  return results;
}

function minimalityFilter(indexes, candidates) {
  for(const cIndexes of candidates) {
    let check = true;
    for(const cIndex of cIndexes) {
      check = check && indexes.includes(cIndex);
    }
    if(check) return false;
  }
  return true;
}

function genCandidate(colRelation, candidates = [], size = 1) {
  const colL = colRelation.length;
  if(colL < size) return candidates;

  const indexCombination = getCombinations(range(colL), size)
                          .filter(indexes => minimalityFilter(indexes, candidates));

  const rowL = colRelation[0].length;
  for(const indexes of indexCombination) {
    const filterCol = indexes.map(index => colRelation[index]);
    const relation  = zip(...filterCol);

    const set = new Set();
    for(const row of relation) {
      setAdd(set, row);
    }
    if(rowL === set.size) candidates.push(indexes);
  }
  return genCandidate(colRelation, candidates, size + 1);
}

function solution(relation) {
  const colRelation = zip(...relation);
  const candidates  = genCandidate(colRelation);
  return candidates.length;
}
