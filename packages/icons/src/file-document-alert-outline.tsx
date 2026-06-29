import { mdiFileDocumentAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentAlertOutline} {...props} />;
}

export { mdiFileDocumentAlertOutline as path };
