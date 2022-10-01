# Vue Twitter Timeline

A Vue3 component which allows you to easily embed twitter timelines.
If you are looking for a Vue3 component to embed tweets check out [this](https://github.com/DannyFeliz/vue-tweet).

## Installation

```
npm install vue-twitter-timeline
```
## Usage

```javascript
import TwitterTimeline from 'vue-twitter-timeline';
```

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

| Property | Description |
| --- | --- |
| `url` | The timeline url part after `https://twitter.com/` |
| `description` | Text to show while loading or if it can't load |
| `height` | Height in pixels |
| `width` | Width in pixels |
| `lang` | Language key to use (default by browser or `en`) |
| `theme` | Theme to use (default by system or `light`, values: `light`, `dark`) |
| `doNotTrack` | Set this bool to prevent tracking |

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm start
```

### Release and publish new version

```
npm run release
```

### Build for demo site

```
npm run build-site
```

### Update dependencies

```
npm run update
```

## License

MIT
