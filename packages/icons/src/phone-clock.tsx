import { mdiPhoneClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneClock(props: IconComponentProps) {
  return <Icon path={mdiPhoneClock} {...props} />;
}

export { mdiPhoneClock as path };
