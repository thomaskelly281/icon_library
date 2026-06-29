import { mdiTextBoxCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiTextBoxCheckOutline} {...props} />;
}

export { mdiTextBoxCheckOutline as path };
