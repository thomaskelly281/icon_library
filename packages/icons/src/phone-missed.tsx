import { mdiPhoneMissed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneMissed(props: IconComponentProps) {
  return <Icon path={mdiPhoneMissed} {...props} />;
}

export { mdiPhoneMissed as path };
