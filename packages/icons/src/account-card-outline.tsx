import { mdiAccountCardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCardOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountCardOutline} {...props} />;
}

export { mdiAccountCardOutline as path };
