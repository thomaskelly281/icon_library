import { mdiArrowDownBoldOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDownBoldOutline(props: IconComponentProps) {
  return <Icon path={mdiArrowDownBoldOutline} {...props} />;
}

export { mdiArrowDownBoldOutline as path };
