import { mdiOrbitVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OrbitVariant(props: IconComponentProps) {
  return <Icon path={mdiOrbitVariant} {...props} />;
}

export { mdiOrbitVariant as path };
