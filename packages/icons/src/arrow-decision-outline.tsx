import { mdiArrowDecisionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDecisionOutline(props: IconComponentProps) {
  return <Icon path={mdiArrowDecisionOutline} {...props} />;
}

export { mdiArrowDecisionOutline as path };
