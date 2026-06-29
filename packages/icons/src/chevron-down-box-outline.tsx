import { mdiChevronDownBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronDownBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiChevronDownBoxOutline} {...props} />;
}

export { mdiChevronDownBoxOutline as path };
