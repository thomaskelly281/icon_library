import { mdiPhoneBluetoothOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneBluetoothOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneBluetoothOutline} {...props} />;
}

export { mdiPhoneBluetoothOutline as path };
