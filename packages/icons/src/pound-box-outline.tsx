import { mdiPoundBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PoundBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiPoundBoxOutline} {...props} />;
}

export { mdiPoundBoxOutline as path };
