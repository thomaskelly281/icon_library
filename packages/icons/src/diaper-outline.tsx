import { mdiDiaperOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiaperOutline(props: IconComponentProps) {
  return <Icon path={mdiDiaperOutline} {...props} />;
}

export { mdiDiaperOutline as path };
