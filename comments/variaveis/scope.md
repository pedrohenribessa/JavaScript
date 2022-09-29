# Scope

    * Escopo determina a visibilidade de alguma variável no JS

# Block Statement
```js
// vamos iníciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```
O bloco, também criará um novo scopo. Chamamos de 'block-scoped'

## var

```js
    // var é global e poderá funcionar fora de um scopo de bloco
    console.log('> existe x depois do bloco?', x)
```

## let e const
```js
    // const e let são locais e só funcionam no scopo onde foi criada
    console.log('> existe y antes do bloco?', y)
{
    let y = 0
}   
    console.log('> existe x antes do bloco?')
```