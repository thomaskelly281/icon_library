import { mdiFileDocumentRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentRemoveOutline} {...props} />;
}

export { mdiFileDocumentRemoveOutline as path };
