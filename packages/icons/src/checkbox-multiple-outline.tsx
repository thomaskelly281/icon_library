import { mdiCheckboxMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiCheckboxMultipleOutline} {...props} />;
}

export { mdiCheckboxMultipleOutline as path };
