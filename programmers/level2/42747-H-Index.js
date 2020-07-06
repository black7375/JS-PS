function solution(citations) {
  for( const [index, value] of citations.sort((a, b) => b - a)
                                        .entries() ) {
    if(index >= value) return index;
  }
  return citations.length;
}
