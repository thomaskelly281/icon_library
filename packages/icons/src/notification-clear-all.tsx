import { mdiNotificationClearAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotificationClearAll(props: IconComponentProps) {
  return <Icon path={mdiNotificationClearAll} {...props} />;
}

export { mdiNotificationClearAll as path };
