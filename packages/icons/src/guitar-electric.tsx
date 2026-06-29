import { mdiGuitarElectric } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GuitarElectric(props: IconComponentProps) {
  return <Icon path={mdiGuitarElectric} {...props} />;
}

export { mdiGuitarElectric as path };
