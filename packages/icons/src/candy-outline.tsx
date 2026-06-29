import { mdiCandyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CandyOutline(props: IconComponentProps) {
  return <Icon path={mdiCandyOutline} {...props} />;
}

export { mdiCandyOutline as path };
