import { mdiOrbit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Orbit(props: IconComponentProps) {
  return <Icon path={mdiOrbit} {...props} />;
}

export { mdiOrbit as path };
