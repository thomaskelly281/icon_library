import { mdiCardBulletedOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardBulletedOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCardBulletedOffOutline} {...props} />;
}

export { mdiCardBulletedOffOutline as path };
