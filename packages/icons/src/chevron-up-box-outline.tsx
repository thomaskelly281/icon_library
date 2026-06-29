import { mdiChevronUpBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronUpBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiChevronUpBoxOutline} {...props} />;
}

export { mdiChevronUpBoxOutline as path };
