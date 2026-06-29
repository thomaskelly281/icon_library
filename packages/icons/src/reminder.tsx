import { mdiReminder } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Reminder(props: IconComponentProps) {
  return <Icon path={mdiReminder} {...props} />;
}

export { mdiReminder as path };
