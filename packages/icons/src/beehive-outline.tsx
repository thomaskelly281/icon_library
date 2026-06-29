import { mdiBeehiveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeehiveOutline(props: IconComponentProps) {
  return <Icon path={mdiBeehiveOutline} {...props} />;
}

export { mdiBeehiveOutline as path };
