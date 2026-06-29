import { mdiCrosshairs } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Crosshairs(props: IconComponentProps) {
  return <Icon path={mdiCrosshairs} {...props} />;
}

export { mdiCrosshairs as path };
