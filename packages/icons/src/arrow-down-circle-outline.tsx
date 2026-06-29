import { mdiArrowDownCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowDownCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiArrowDownCircleOutline} {...props} />;
}

export { mdiArrowDownCircleOutline as path };
