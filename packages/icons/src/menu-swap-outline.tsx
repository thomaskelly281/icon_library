import { mdiMenuSwapOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenuSwapOutline(props: IconComponentProps) {
  return <Icon path={mdiMenuSwapOutline} {...props} />;
}

export { mdiMenuSwapOutline as path };
