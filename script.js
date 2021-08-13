function multiplicationTable(n) {
  let results = [];
  //  criando as linhas
  for (let linha = 0; linha <= n; linha++) {
    results.push([]);

    for (let coluna = 0; coluna <= n; coluna++) {
      results[linha].push(coluna * linha);
    }
  }
  return results;
}

console.table(multiplicationTable(10));
