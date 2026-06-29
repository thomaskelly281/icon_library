import { mdiViewHeadline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewHeadline(props: IconComponentProps) {
  return <Icon path={mdiViewHeadline} {...props} />;
}

export { mdiViewHeadline as path };
