import { mdiBookCancelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookCancelOutline(props: IconComponentProps) {
  return <Icon path={mdiBookCancelOutline} {...props} />;
}

export { mdiBookCancelOutline as path };
