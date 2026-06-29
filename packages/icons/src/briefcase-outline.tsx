import { mdiBriefcaseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcaseOutline(props: IconComponentProps) {
  return <Icon path={mdiBriefcaseOutline} {...props} />;
}

export { mdiBriefcaseOutline as path };
