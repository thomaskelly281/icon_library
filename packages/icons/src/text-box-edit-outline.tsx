import { mdiTextBoxEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxEditOutline(props: IconComponentProps) {
  return <Icon path={mdiTextBoxEditOutline} {...props} />;
}

export { mdiTextBoxEditOutline as path };
