import { mdiFileDocumentCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentCheckOutline} {...props} />;
}

export { mdiFileDocumentCheckOutline as path };
