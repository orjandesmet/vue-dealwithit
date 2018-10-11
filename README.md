# vue-dealwithit

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vue-dealwithit)

Set the sizePercentage attribute (default = 100)

To display, run:
```
vm.displayAt = {top: 30, left: 40};
```

As webcomponent:
```
<script src="https://unpkg.com/vue"></script>
<script src="./deal-with-it.js"></script>
<deal-with-it id="your-id" size-percentage="150"></deal-with-it>
document.getElementById('your-id').displayAt = {top: 10, left: 30};
```

To hide, click the shades

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Build web component
```
vue build --target wc --name deal-with-it ./src/web-component.js
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```
