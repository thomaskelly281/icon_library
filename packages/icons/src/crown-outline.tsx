import { mdiCrownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CrownOutline(props: IconComponentProps) {
  return <Icon path={mdiCrownOutline} {...props} />;
}

export { mdiCrownOutline as path };
