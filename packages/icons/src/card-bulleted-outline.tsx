import { mdiCardBulletedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardBulletedOutline(props: IconComponentProps) {
  return <Icon path={mdiCardBulletedOutline} {...props} />;
}

export { mdiCardBulletedOutline as path };
