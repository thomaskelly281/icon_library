import { mdiTextBoxMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiTextBoxMultipleOutline} {...props} />;
}

export { mdiTextBoxMultipleOutline as path };
