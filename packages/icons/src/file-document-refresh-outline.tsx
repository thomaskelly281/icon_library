import { mdiFileDocumentRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDocumentRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiFileDocumentRefreshOutline} {...props} />;
}

export { mdiFileDocumentRefreshOutline as path };
