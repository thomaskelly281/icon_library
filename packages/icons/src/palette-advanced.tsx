import { mdiPaletteAdvanced } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaletteAdvanced(props: IconComponentProps) {
  return <Icon path={mdiPaletteAdvanced} {...props} />;
}

export { mdiPaletteAdvanced as path };
