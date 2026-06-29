import { mdiCloseOctagonOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseOctagonOutline(props: IconComponentProps) {
  return <Icon path={mdiCloseOctagonOutline} {...props} />;
}

export { mdiCloseOctagonOutline as path };
