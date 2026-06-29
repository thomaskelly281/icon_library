import { mdiCrownCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CrownCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiCrownCircleOutline} {...props} />;
}

export { mdiCrownCircleOutline as path };
