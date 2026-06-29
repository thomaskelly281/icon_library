import { mdiPhonePaused } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhonePaused(props: IconComponentProps) {
  return <Icon path={mdiPhonePaused} {...props} />;
}

export { mdiPhonePaused as path };
