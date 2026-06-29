import { mdiPumpkin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pumpkin(props: IconComponentProps) {
  return <Icon path={mdiPumpkin} {...props} />;
}

export { mdiPumpkin as path };
