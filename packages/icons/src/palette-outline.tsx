import { mdiPaletteOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaletteOutline(props: IconComponentProps) {
  return <Icon path={mdiPaletteOutline} {...props} />;
}

export { mdiPaletteOutline as path };
