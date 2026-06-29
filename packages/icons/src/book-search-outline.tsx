import { mdiBookSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiBookSearchOutline} {...props} />;
}

export { mdiBookSearchOutline as path };
