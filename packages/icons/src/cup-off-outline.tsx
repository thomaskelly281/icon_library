import { mdiCupOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CupOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCupOffOutline} {...props} />;
}

export { mdiCupOffOutline as path };
