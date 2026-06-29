import { mdiChevronUpCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronUpCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiChevronUpCircleOutline} {...props} />;
}

export { mdiChevronUpCircleOutline as path };
