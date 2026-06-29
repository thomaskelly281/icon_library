import { mdiBackspaceReverseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BackspaceReverseOutline(props: IconComponentProps) {
  return <Icon path={mdiBackspaceReverseOutline} {...props} />;
}

export { mdiBackspaceReverseOutline as path };
