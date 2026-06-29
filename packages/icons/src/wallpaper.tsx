import { mdiWallpaper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wallpaper(props: IconComponentProps) {
  return <Icon path={mdiWallpaper} {...props} />;
}

export { mdiWallpaper as path };
