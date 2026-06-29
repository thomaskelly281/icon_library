import { mdiPiBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PiBox(props: IconComponentProps) {
  return <Icon path={mdiPiBox} {...props} />;
}

export { mdiPiBox as path };
