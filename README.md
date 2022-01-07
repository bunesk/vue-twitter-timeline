# Vue Twitter Timeline

A Vue3 component which allows you to easily embed twitter timelines.

## Usage

Download the `TwitterTimeline.vue` component file. After that you can import and use it:

```vue
<TwitterTimeline
  url="TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw"
  description="Loading..."
  height="480"
  width="520"
  lang="de"
  theme="dark"
  doNotTrack
></TwitterTimeline>
```

### Props

- `url`: The timeline url part after `https://twitter.com/`
- `description`: Text to show while loading or if it can't load
- `height`: Height in pixels
- `width`: Width in pixels
- `lang`: Language key to use (default by browser or `en`)
- `theme`: Theme to use (default by system or `light`, values: `light`, `dark`)
- `doNotTrack`: Set this bool to prevent tracking

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
