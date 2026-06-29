import { mdiChevronRightCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronRightCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiChevronRightCircleOutline} {...props} />;
}

export { mdiChevronRightCircleOutline as path };
