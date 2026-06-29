import { mdiArrowUpBoldOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpBoldOutline(props: IconComponentProps) {
  return <Icon path={mdiArrowUpBoldOutline} {...props} />;
}

export { mdiArrowUpBoldOutline as path };
