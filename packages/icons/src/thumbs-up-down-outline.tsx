import { mdiThumbsUpDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThumbsUpDownOutline(props: IconComponentProps) {
  return <Icon path={mdiThumbsUpDownOutline} {...props} />;
}

export { mdiThumbsUpDownOutline as path };
