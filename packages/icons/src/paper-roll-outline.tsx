import { mdiPaperRollOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaperRollOutline(props: IconComponentProps) {
  return <Icon path={mdiPaperRollOutline} {...props} />;
}

export { mdiPaperRollOutline as path };
