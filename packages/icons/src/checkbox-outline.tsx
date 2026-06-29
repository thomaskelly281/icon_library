import { mdiCheckboxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxOutline(props: IconComponentProps) {
  return <Icon path={mdiCheckboxOutline} {...props} />;
}

export { mdiCheckboxOutline as path };
