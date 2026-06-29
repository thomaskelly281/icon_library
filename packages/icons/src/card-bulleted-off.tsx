import { mdiCardBulletedOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardBulletedOff(props: IconComponentProps) {
  return <Icon path={mdiCardBulletedOff} {...props} />;
}

export { mdiCardBulletedOff as path };
