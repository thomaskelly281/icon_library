import { mdiFileDocumentPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentPlusOutline} {...props} />;
}

export { mdiFileDocumentPlusOutline as path };
