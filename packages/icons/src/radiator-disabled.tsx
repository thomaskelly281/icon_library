import { mdiRadiatorDisabled } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadiatorDisabled(props: IconComponentProps) {
  return <Icon path={mdiRadiatorDisabled} {...props} />;
}

export { mdiRadiatorDisabled as path };
