import { mdiCheckboxBlankOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxBlankOutline(props: IconComponentProps) {
  return <Icon path={mdiCheckboxBlankOutline} {...props} />;
}

export { mdiCheckboxBlankOutline as path };
