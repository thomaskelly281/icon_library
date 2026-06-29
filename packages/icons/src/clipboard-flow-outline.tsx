import { mdiClipboardFlowOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardFlowOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardFlowOutline} {...props} />;
}

export { mdiClipboardFlowOutline as path };
