import { mdiTextBoxSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TextBoxSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiTextBoxSearchOutline} {...props} />;
}

export { mdiTextBoxSearchOutline as path };
