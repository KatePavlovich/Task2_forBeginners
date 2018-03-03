(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {

        let island = 0;
        let len=map.length;
        for (let i=0; i<len; i++) {
        let x=map[i].length;
            for (let j=0; j<x;j++) {
                if(map[i][j] === 1){
                    island++;
                    helper(i, j);
                }
            }
        }
        
        function helper (i,j) {
          if (map[i] && map[i][j]) {
            map[i][j] = 0;
              
              helper(i-1, j);
              helper(i, j-1);
              helper(i, j+1);
              helper(i+1, j);
            }
          }
  return island;        
}

    root.SHRI_ISLANDS.solution = solution;
})(this);
