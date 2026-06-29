import { mdiBriefcasePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BriefcasePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiBriefcasePlusOutline} {...props} />;
}

export { mdiBriefcasePlusOutline as path };
