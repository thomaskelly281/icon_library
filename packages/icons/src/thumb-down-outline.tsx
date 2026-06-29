import { mdiThumbDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThumbDownOutline(props: IconComponentProps) {
  return <Icon path={mdiThumbDownOutline} {...props} />;
}

export { mdiThumbDownOutline as path };
