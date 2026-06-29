import { mdiChevronDownCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronDownCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiChevronDownCircleOutline} {...props} />;
}

export { mdiChevronDownCircleOutline as path };
