import { mdiEmailArrowRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailArrowRightOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailArrowRightOutline} {...props} />;
}

export { mdiEmailArrowRightOutline as path };
