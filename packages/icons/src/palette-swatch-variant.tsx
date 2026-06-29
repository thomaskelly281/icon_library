import { mdiPaletteSwatchVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaletteSwatchVariant(props: IconComponentProps) {
  return <Icon path={mdiPaletteSwatchVariant} {...props} />;
}

export { mdiPaletteSwatchVariant as path };
