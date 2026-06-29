import { mdiCheckboxMarkedCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxMarkedCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiCheckboxMarkedCircleOutline} {...props} />;
}

export { mdiCheckboxMarkedCircleOutline as path };
