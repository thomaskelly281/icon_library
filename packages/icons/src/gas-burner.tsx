import { mdiGasBurner } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GasBurner(props: IconComponentProps) {
  return <Icon path={mdiGasBurner} {...props} />;
}

export { mdiGasBurner as path };
