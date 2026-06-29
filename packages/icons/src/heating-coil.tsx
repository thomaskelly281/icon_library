import { mdiHeatingCoil } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeatingCoil(props: IconComponentProps) {
  return <Icon path={mdiHeatingCoil} {...props} />;
}

export { mdiHeatingCoil as path };
