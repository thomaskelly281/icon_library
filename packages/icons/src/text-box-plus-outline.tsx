import { mdiTextBoxPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiTextBoxPlusOutline} {...props} />;
}

export { mdiTextBoxPlusOutline as path };
