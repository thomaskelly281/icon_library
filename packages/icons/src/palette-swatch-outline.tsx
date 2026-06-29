import { mdiPaletteSwatchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaletteSwatchOutline(props: IconComponentProps) {
  return <Icon path={mdiPaletteSwatchOutline} {...props} />;
}

export { mdiPaletteSwatchOutline as path };
