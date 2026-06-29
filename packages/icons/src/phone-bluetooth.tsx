import { mdiPhoneBluetooth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneBluetooth(props: IconComponentProps) {
  return <Icon path={mdiPhoneBluetooth} {...props} />;
}

export { mdiPhoneBluetooth as path };
