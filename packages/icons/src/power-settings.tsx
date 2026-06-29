import { mdiPowerSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerSettings(props: IconComponentProps) {
  return <Icon path={mdiPowerSettings} {...props} />;
}

export { mdiPowerSettings as path };
