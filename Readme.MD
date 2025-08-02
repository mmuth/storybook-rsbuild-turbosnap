# Minimal repro for chromatic issues with TurboSnap when using storybook-rsbuild

* this repro aims to provide a minimal repro to debug a non working chromatic TurboSnap when using storybook-rsbuild (TurboSnap detects affected screenshots of
  changes and thus saves a lot of computing power / money for visual regression tests)
* TurboSnap requires conditions to be fulfilled, and this repo provides the current state of the problem
* you can use the vite builder directory as a comparison, where the criteria is fulfilled (and TurboSnap can work)

**Repro:**

* build storybook with stats file `pnpm run build:storybook` (important about it: it contains the option `--webpack-stats-json`)
* then the stats file **should** include the `ExamplePage.tsx` (test this via `cat storybook/preview-stats.json | jq '.modules[].id' | grep ExamplePage.tsx`)
  but it
  does not contain it
* you can do the same flow within `./storybook9-vite` and it will succeed

