import { mdiHomePercentOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomePercentOutline(props: IconComponentProps) {
  return <Icon path={mdiHomePercentOutline} {...props} />;
}

export { mdiHomePercentOutline as path };
