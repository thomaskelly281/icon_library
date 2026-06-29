import { mdiHelpCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HelpCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiHelpCircleOutline} {...props} />;
}

export { mdiHelpCircleOutline as path };
