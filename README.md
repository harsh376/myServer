**State tree**

```js
{
    'input': 'R',
    'filtered_entries': ['Ross', 'Rachel'],
    'entries': ['Ross', 'Rachel', 'Joey']
}
```


----


```js
{
    'input': '',
    'filtered_entries': ['Ross', 'Rachel', 'Joey'],
    'entries': ['Ross', 'Rachel', 'Joey']
}
```


```js
{
    'input': 'R',
    'filtered_entries': ['Ross', 'Rachel'],
    'entries': ['Ross', 'Rachel', 'Joey']
}
```

----


- npm start: node index
    + express app
    + web pack.config
        * entry = ./client/entry.jsx
    + new webpackdevserver
        * ./client/entry.jsx
            - React.render(<Component …/>, dom element)
