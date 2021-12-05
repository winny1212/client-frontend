### COMPONENTS

Within the `components` folder, we can group by type - forms, tables, buttons, layout, etc.

Based on https://www.taniarascia.com/react-architecture-directory-structure/

Recommended structure:
```
.
└── /src
    └── /components
        ├── /forms
        │   ├── /TextField
        │   │   ├── TextField.js
        │   │   ├── TextField.styles.js
        │   │   ├── TextField.test.js
        │   │   └── TextField.stories.js
        │   ├── /Select
        │   │   ├── Select.js
        │   │   ├── Select.styles.js
        │   │   ├── Select.test.js
        │   │   └── Select.stories.js
        │   └── index.js
        ├── /routing
        │   └── /PrivateRoute
        │       ├── /PrivateRoute.js
        │       └── /PrivateRoute.test.js
        └── /layout
            └── /navigation
                └── /NavBar
                    ├── NavBar.js
                    ├── NavBar.styles.js
                    ├── NavBar.test.js
                    └── NavBar.stories.js
```

We'd create a folder for each component (TextField, Select, Radio, Dropdown, etc.), and inside would be a file for the component itself, the styles, the tests, and the Storybook if it's being used.

- Component.js - The actual React component
- Component.styles.js - The Styled Components file for the component
- Component.test.js - The tests