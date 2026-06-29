import { mdiGasCylinder } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GasCylinder(props: IconComponentProps) {
  return <Icon path={mdiGasCylinder} {...props} />;
}

export { mdiGasCylinder as path };
