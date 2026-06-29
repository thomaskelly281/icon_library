import { mdiAccountArrowRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountArrowRightOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountArrowRightOutline} {...props} />;
}

export { mdiAccountArrowRightOutline as path };
