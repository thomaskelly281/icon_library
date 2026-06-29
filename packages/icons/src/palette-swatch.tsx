import { mdiPaletteSwatch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaletteSwatch(props: IconComponentProps) {
  return <Icon path={mdiPaletteSwatch} {...props} />;
}

export { mdiPaletteSwatch as path };
