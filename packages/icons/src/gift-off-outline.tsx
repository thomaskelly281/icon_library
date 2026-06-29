import { mdiGiftOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GiftOffOutline(props: IconComponentProps) {
  return <Icon path={mdiGiftOffOutline} {...props} />;
}

export { mdiGiftOffOutline as path };
