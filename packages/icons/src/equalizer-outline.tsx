import { mdiEqualizerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EqualizerOutline(props: IconComponentProps) {
  return <Icon path={mdiEqualizerOutline} {...props} />;
}

export { mdiEqualizerOutline as path };
