import { mdiFlashTriangleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlashTriangleOutline(props: IconComponentProps) {
  return <Icon path={mdiFlashTriangleOutline} {...props} />;
}

export { mdiFlashTriangleOutline as path };
