import { mdiAccountFilterOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountFilterOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountFilterOutline} {...props} />;
}

export { mdiAccountFilterOutline as path };
