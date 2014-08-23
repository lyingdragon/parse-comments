[ { begin: 11,
    type: 'function expression',
    name: '',
    args: [],
    string: '/**\n * @param {String} `name` This is the description for "name"\n *   @option {String} [name] `a` This is the description for "name"\n *   @option {String} [name] `b` This is the description for "name"\n * @param {String} `propstring`  This is the description for "propstring"\n *   @param {String} [propstring] \'foo\'  This is the description for "propstring"\n *   @param {String} [propstring] \'bar\'  This is the description for "propstring"\n * @api public\n */',
    original: 'var foo = function() {};',
    param: 
     [ '{String} `name` This is the description for "name"',
       '{String} `propstring`  This is the description for "propstring"',
       '{String} [propstring] \'foo\'  This is the description for "propstring"',
       '{String} [propstring] \'bar\'  This is the description for "propstring"' ],
    option: 
     [ '{String} [name] `a` This is the description for "name"',
       '{String} [name] `b` This is the description for "name"' ],
    api: 'public',
    heading: { level: 2, text: '' },
    params: 
     [ { type: 'String',
         name: 'name',
         description: 'This is the description for "name"',
         options: 
          [ { type: 'String',
              name: 'a',
              description: 'This is the description for "name"' },
            { type: 'String',
              name: 'b',
              description: 'This is the description for "name"' } ] },
       { type: 'String',
         name: 'propstring',
         description: 'This is the description for "propstring"',
         params: 
          [ { type: 'String',
              name: undefined,
              description: '\'foo\'  This is the description for "propstring"',
              params: 
               [ { type: 'String',
                   name: 'name',
                   description: 'This is the description for "name"',
                   options: 
                    [ { type: 'String',
                        name: 'a',
                        description: 'This is the description for "name"' },
                      { type: 'String',
                        name: 'b',
                        description: 'This is the description for "name"' } ] },
                 [Circular] ] },
            { type: 'String',
              name: undefined,
              description: '\'bar\'  This is the description for "propstring"',
              params: 
               [ { type: 'String',
                   name: 'name',
                   description: 'This is the description for "name"',
                   options: 
                    [ { type: 'String',
                        name: 'a',
                        description: 'This is the description for "name"' },
                      { type: 'String',
                        name: 'b',
                        description: 'This is the description for "name"' } ] },
                 [Circular] ] } ] },
       { type: 'String',
         name: undefined,
         description: '\'foo\'  This is the description for "propstring"',
         params: 
          [ { type: 'String',
              name: 'name',
              description: 'This is the description for "name"',
              options: 
               [ { type: 'String',
                   name: 'a',
                   description: 'This is the description for "name"' },
                 { type: 'String',
                   name: 'b',
                   description: 'This is the description for "name"' } ] },
            { type: 'String',
              name: 'propstring',
              description: 'This is the description for "propstring"',
              params: 
               [ [Circular],
                 { type: 'String',
                   name: undefined,
                   description: '\'bar\'  This is the description for "propstring"',
                   params: [Circular] } ] } ] },
       { type: 'String',
         name: undefined,
         description: '\'bar\'  This is the description for "propstring"',
         params: 
          [ { type: 'String',
              name: 'name',
              description: 'This is the description for "name"',
              options: 
               [ { type: 'String',
                   name: 'a',
                   description: 'This is the description for "name"' },
                 { type: 'String',
                   name: 'b',
                   description: 'This is the description for "name"' } ] },
            { type: 'String',
              name: 'propstring',
              description: 'This is the description for "propstring"',
              params: 
               [ { type: 'String',
                   name: undefined,
                   description: '\'foo\'  This is the description for "propstring"',
                   params: [Circular] },
                 [Circular] ] } ] } ],
    options: 
     [ { type: 'String',
         name: 'a',
         description: 'This is the description for "name"' },
       { type: 'String',
         name: 'b',
         description: 'This is the description for "name"' } ],
    line: 1 },
  { begin: 22,
    type: 'function expression',
    name: '',
    args: [],
    string: '/**\n * @param {String} `name` This is the description for "name"\n *   @option {String} [name] `a` This is the description for "name"\n *   @option {String} [name] `b` This is the description for "name"\n * @param {String} `propstring`  This is the description for "propstring"\n * @api public\n */',
    original: 'var bar = function() {};',
    param: 
     [ '{String} `name` This is the description for "name"',
       '{String} `propstring`  This is the description for "propstring"' ],
    option: 
     [ '{String} [name] `a` This is the description for "name"',
       '{String} [name] `b` This is the description for "name"' ],
    api: 'public',
    heading: { level: 2, text: '' },
    params: 
     [ { type: 'String',
         name: 'name',
         description: 'This is the description for "name"',
         options: 
          [ { type: 'String',
              name: 'a',
              description: 'This is the description for "name"' },
            { type: 'String',
              name: 'b',
              description: 'This is the description for "name"' } ] },
       { type: 'String',
         name: 'propstring',
         description: 'This is the description for "propstring"' } ],
    options: 
     [ { type: 'String',
         name: 'a',
         description: 'This is the description for "name"' },
       { type: 'String',
         name: 'b',
         description: 'This is the description for "name"' } ],
    line: 1 } ]