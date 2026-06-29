import { mdiHomeCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeCircleOutline} {...props} />;
}

export { mdiHomeCircleOutline as path };
