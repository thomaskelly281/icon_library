import { mdiArrowUpCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiArrowUpCircleOutline} {...props} />;
}

export { mdiArrowUpCircleOutline as path };
