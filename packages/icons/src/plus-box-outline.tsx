import { mdiPlusBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiPlusBoxOutline} {...props} />;
}

export { mdiPlusBoxOutline as path };
