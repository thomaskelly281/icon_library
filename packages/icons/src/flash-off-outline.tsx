import { mdiFlashOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlashOffOutline(props: IconComponentProps) {
  return <Icon path={mdiFlashOffOutline} {...props} />;
}

export { mdiFlashOffOutline as path };
