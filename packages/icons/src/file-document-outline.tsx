import { mdiFileDocumentOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentOutline(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentOutline} {...props} />;
}

export { mdiFileDocumentOutline as path };
