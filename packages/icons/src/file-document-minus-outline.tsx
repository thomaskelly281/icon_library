import { mdiFileDocumentMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentMinusOutline} {...props} />;
}

export { mdiFileDocumentMinusOutline as path };
