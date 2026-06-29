import { mdiArrowRightBoldOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRightBoldOutline(props: IconComponentProps) {
  return <Icon path={mdiArrowRightBoldOutline} {...props} />;
}

export { mdiArrowRightBoldOutline as path };
