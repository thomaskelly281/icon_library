import { mdiSofaSingleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SofaSingleOutline(props: IconComponentProps) {
  return <Icon path={mdiSofaSingleOutline} {...props} />;
}

export { mdiSofaSingleOutline as path };
