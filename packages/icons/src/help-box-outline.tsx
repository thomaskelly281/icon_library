import { mdiHelpBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HelpBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiHelpBoxOutline} {...props} />;
}

export { mdiHelpBoxOutline as path };
