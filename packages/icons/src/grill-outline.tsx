import { mdiGrillOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GrillOutline(props: IconComponentProps) {
  return <Icon path={mdiGrillOutline} {...props} />;
}

export { mdiGrillOutline as path };
