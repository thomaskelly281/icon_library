import { mdiSignalCellularOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignalCellularOutline(props: IconComponentProps) {
  return <Icon path={mdiSignalCellularOutline} {...props} />;
}

export { mdiSignalCellularOutline as path };
