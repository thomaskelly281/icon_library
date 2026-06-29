import { mdiHeadFlashOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadFlashOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadFlashOutline} {...props} />;
}

export { mdiHeadFlashOutline as path };
