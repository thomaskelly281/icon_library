import { mdiPalette } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Palette(props: IconComponentProps) {
  return <Icon path={mdiPalette} {...props} />;
}

export { mdiPalette as path };
