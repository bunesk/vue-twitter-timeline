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
  height="720"
  width="720"
  lang="de"
  theme="dark"
  doNotTrack
></TwitterTimeline>
```

### Props

| Property      | Description                                        | Type             | Default                  |
| ------------- | -------------------------------------------------- | ---------------- | ------------------------ |
| `url`         | The timeline url part after `https://twitter.com/` | `string`         | -                        |
| `description` | Text to show while loading or if it can't load     | `string`         | `''`                     |
| `height`      | Height in pixels                                   | `string`         | `''`                     |
| `width`       | Width in pixels                                    | `string`         | `''`                     |
| `lang`        | Language key to use                                | `string`         | browser setting / `en`   |
| `theme`       | Theme to use                                       | `light` / `dark` | system setting / `light` |
| `doNotTrack`  | If tracking should be prevented                    | `boolean`        | `false`                  |

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
