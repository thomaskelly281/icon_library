import { mdiPentagonOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PentagonOutline(props: IconComponentProps) {
  return <Icon path={mdiPentagonOutline} {...props} />;
}

export { mdiPentagonOutline as path };
