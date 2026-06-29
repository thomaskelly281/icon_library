import { mdiTextBoxRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiTextBoxRemoveOutline} {...props} />;
}

export { mdiTextBoxRemoveOutline as path };
