import { mdiCandyOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CandyOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCandyOffOutline} {...props} />;
}

export { mdiCandyOffOutline as path };
