import { mdiHeadphonesBluetooth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadphonesBluetooth(props: IconComponentProps) {
  return <Icon path={mdiHeadphonesBluetooth} {...props} />;
}

export { mdiHeadphonesBluetooth as path };
