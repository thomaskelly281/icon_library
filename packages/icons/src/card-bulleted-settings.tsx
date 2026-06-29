import { mdiCardBulletedSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardBulletedSettings(props: IconComponentProps) {
  return <Icon path={mdiCardBulletedSettings} {...props} />;
}

export { mdiCardBulletedSettings as path };
