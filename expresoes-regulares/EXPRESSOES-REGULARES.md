# Expressões Regulares

## Operadores

```
// => Define uma expressão

-  => Dentro de colchetes, um hífen ("-") entre dois caracteres pode ser usado para indicar um conjunto entre dois caracteres.

.  => Todos os caracteres, exceto espaços

^  => Para "inverter" um conjunto de caracteres, buscar tudo menos o que você escreveu no padrão, um cento circunflexo ("^") é colocado no início do colchete de abertura.

+  => Quando se coloca um sinal de mais ("+") depois de algo em uma expressão regular, indicamos que pode existir mais de um.

*  => O asterisco ("*") tem um significado similar, mas também permite não encontrar o padrão. Então, algo com um asterisco depois não impede um padrão de ser achado, apenas retornando zero resultados.

?  => Uma interrogação ("?") define uma parte do padrão de busca como "opcional", o que significa que ele pode ocorrer zero ou uma vez.

{} => Para permitir que um padrão ocorra um número definido de vezes, chaves ("{}") são usadas. Colocando {4} depois de um elemento do padrão, mostra que ele deve ocorrer 4 vezes, exatamente. Da mesma maneira, {2,4} é utilizado para definir que ele deve aparecer no mínimo 2 vezes e no máximo 4.

[] => Em uma expressão regular, colocar um conjunto de caracteres entre colchetes ("[]") faz com que a expressão ache qualquer dos caracteres dentro dos colchetes.

() => Para usar um operador como "*" ou "+" em mais de um caractere de de uma vez, é necessário o uso de parênteses. Um pedaço de uma expressão regular que é delimitado por parênteses conta como uma única unidade, assim como os operadores aplicados a esse pedaço delimitado.

\i => O "i" no final da expressão do exemplo acima faz com que a expressão regular seja case-insensitive, permitindo-a encontrar a letra maiúscula "B" na _string_dada, mesmo que a descrição do padrão tenha sido feita em letras minúsculas.
```

## Testar uma expressão

A função /expressão a regurlar/.test( "String a ser testada" )

### Ex:
```
console.log( /abc/.test("abcde") ); // true
console.log( /0-9/.test("abcde") ); // true
```

## Tipos de pesquisa

#### Pesquisar todas as strings que contem um dígito numérico.
```
console.log( /[0-9]/.test("ano 1992") );
```

#### Pesquisar todas as strings que contem uma letra do alfabeto.
```
console.log( /[a-z]/.test("ano 1992") );
```

### Grupos de caracteres de uso comum

```
- \d	caracteres numéricos
- \w	caracteres alfanuméricos ("letras")
- \s	espaços em branco (espaço, tabs, quebras de linha e similares)
- \D	caracteres que não são dígitos
- \W	caracteres não alfanuméricos
- \S	caracteres que não representam espaços
- .     (ponto)	todos os caracteres, exceto espaços
```

