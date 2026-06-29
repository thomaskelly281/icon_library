import { mdiFileReplaceOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileReplaceOutline(props: IconComponentProps) {
  return <Icon path={mdiFileReplaceOutline} {...props} />;
}

export { mdiFileReplaceOutline as path };
