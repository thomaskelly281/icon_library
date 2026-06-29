import { mdiArrowRightCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRightCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiArrowRightCircleOutline} {...props} />;
}

export { mdiArrowRightCircleOutline as path };
