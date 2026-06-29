import { mdiFileDocumentMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentMultipleOutline} {...props} />;
}

export { mdiFileDocumentMultipleOutline as path };
