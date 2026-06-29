import { mdiHelpBoxMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HelpBoxMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiHelpBoxMultipleOutline} {...props} />;
}

export { mdiHelpBoxMultipleOutline as path };
