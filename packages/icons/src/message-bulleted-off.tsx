import { mdiMessageBulletedOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageBulletedOff(props: IconComponentProps) {
  return <Icon path={mdiMessageBulletedOff} {...props} />;
}

export { mdiMessageBulletedOff as path };
