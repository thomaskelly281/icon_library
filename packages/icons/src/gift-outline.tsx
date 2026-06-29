import { mdiGiftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GiftOutline(props: IconComponentProps) {
  return <Icon path={mdiGiftOutline} {...props} />;
}

export { mdiGiftOutline as path };
