import { mdiCommaCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CommaCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiCommaCircleOutline} {...props} />;
}

export { mdiCommaCircleOutline as path };
