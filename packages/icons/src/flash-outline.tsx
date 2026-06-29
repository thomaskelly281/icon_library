import { mdiFlashOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlashOutline(props: IconComponentProps) {
  return <Icon path={mdiFlashOutline} {...props} />;
}

export { mdiFlashOutline as path };
