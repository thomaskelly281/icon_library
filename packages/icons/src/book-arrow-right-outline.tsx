import { mdiBookArrowRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookArrowRightOutline(props: IconComponentProps) {
  return <Icon path={mdiBookArrowRightOutline} {...props} />;
}

export { mdiBookArrowRightOutline as path };
