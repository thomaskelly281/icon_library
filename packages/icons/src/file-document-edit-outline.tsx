import { mdiFileDocumentEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentEditOutline(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentEditOutline} {...props} />;
}

export { mdiFileDocumentEditOutline as path };
