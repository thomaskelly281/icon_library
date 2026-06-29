import { mdiCheckboxMarkedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxMarkedOutline(props: IconComponentProps) {
  return <Icon path={mdiCheckboxMarkedOutline} {...props} />;
}

export { mdiCheckboxMarkedOutline as path };
