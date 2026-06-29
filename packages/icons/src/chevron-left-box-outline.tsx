import { mdiChevronLeftBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronLeftBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiChevronLeftBoxOutline} {...props} />;
}

export { mdiChevronLeftBoxOutline as path };
