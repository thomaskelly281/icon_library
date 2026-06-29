import { mdiPostOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PostOutline(props: IconComponentProps) {
  return <Icon path={mdiPostOutline} {...props} />;
}

export { mdiPostOutline as path };
