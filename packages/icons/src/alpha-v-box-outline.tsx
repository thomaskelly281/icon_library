import { mdiAlphaVBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaVBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiAlphaVBoxOutline} {...props} />;
}

export { mdiAlphaVBoxOutline as path };
