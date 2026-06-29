import { mdiAccountClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountClock(props: IconComponentProps) {
  return <Icon path={mdiAccountClock} {...props} />;
}

export { mdiAccountClock as path };
