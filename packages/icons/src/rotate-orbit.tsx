import { mdiRotateOrbit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RotateOrbit(props: IconComponentProps) {
  return <Icon path={mdiRotateOrbit} {...props} />;
}

export { mdiRotateOrbit as path };
