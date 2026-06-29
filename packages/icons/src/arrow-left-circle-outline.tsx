import { mdiArrowLeftCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftCircleOutline} {...props} />;
}

export { mdiArrowLeftCircleOutline as path };
