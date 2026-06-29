import { mdiCheckboxBlankBadgeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxBlankBadgeOutline(props: IconComponentProps) {
  return <Icon path={mdiCheckboxBlankBadgeOutline} {...props} />;
}

export { mdiCheckboxBlankBadgeOutline as path };
