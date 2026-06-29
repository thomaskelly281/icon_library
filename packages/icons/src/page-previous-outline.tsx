import { mdiPagePreviousOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PagePreviousOutline(props: IconComponentProps) {
  return <Icon path={mdiPagePreviousOutline} {...props} />;
}

export { mdiPagePreviousOutline as path };
