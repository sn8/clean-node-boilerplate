# clean-node-boilerplate

This is a clean node boilerplate project with Webpack, Babel, ESLint & Jest.

## Project setup
```
yarn install
```

### Compiles and reloads for development
```
yarn serve
```

### Compiles for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints files
```
yarn lint
```

## Dockerization
```
docker build --tag clean-node-boilerplate .
docker run --rm -it clean-node-boilerplate:latest
```