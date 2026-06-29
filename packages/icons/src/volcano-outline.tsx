import { mdiVolcanoOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VolcanoOutline(props: IconComponentProps) {
  return <Icon path={mdiVolcanoOutline} {...props} />;
}

export { mdiVolcanoOutline as path };
