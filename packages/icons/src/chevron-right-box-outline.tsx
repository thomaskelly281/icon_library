import { mdiChevronRightBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronRightBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiChevronRightBoxOutline} {...props} />;
}

export { mdiChevronRightBoxOutline as path };
