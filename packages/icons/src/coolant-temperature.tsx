import { mdiCoolantTemperature } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CoolantTemperature(props: IconComponentProps) {
  return <Icon path={mdiCoolantTemperature} {...props} />;
}

export { mdiCoolantTemperature as path };
