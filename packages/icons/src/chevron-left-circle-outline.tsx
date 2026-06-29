import { mdiChevronLeftCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronLeftCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiChevronLeftCircleOutline} {...props} />;
}

export { mdiChevronLeftCircleOutline as path };
