import { mdiAlphaHBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaHBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiAlphaHBoxOutline} {...props} />;
}

export { mdiAlphaHBoxOutline as path };
