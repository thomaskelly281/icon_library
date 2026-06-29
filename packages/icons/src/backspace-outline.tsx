import { mdiBackspaceOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BackspaceOutline(props: IconComponentProps) {
  return <Icon path={mdiBackspaceOutline} {...props} />;
}

export { mdiBackspaceOutline as path };
