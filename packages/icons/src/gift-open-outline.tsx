import { mdiGiftOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GiftOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiGiftOpenOutline} {...props} />;
}

export { mdiGiftOpenOutline as path };
