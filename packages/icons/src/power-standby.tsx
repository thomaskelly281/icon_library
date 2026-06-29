import { mdiPowerStandby } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerStandby(props: IconComponentProps) {
  return <Icon path={mdiPowerStandby} {...props} />;
}

export { mdiPowerStandby as path };
