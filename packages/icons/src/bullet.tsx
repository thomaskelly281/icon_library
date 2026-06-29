import { mdiBullet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bullet(props: IconComponentProps) {
  return <Icon path={mdiBullet} {...props} />;
}

export { mdiBullet as path };
