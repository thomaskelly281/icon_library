import { mdiPhoneLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneLock(props: IconComponentProps) {
  return <Icon path={mdiPhoneLock} {...props} />;
}

export { mdiPhoneLock as path };
