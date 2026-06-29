import { mdiEarbudsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarbudsOutline(props: IconComponentProps) {
  return <Icon path={mdiEarbudsOutline} {...props} />;
}

export { mdiEarbudsOutline as path };
