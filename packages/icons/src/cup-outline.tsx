import { mdiCupOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CupOutline(props: IconComponentProps) {
  return <Icon path={mdiCupOutline} {...props} />;
}

export { mdiCupOutline as path };
