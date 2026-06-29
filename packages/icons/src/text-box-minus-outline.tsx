import { mdiTextBoxMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiTextBoxMinusOutline} {...props} />;
}

export { mdiTextBoxMinusOutline as path };
