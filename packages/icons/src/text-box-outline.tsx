import { mdiTextBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiTextBoxOutline} {...props} />;
}

export { mdiTextBoxOutline as path };
