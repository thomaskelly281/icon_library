import { mdiSkipPreviousCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkipPreviousCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiSkipPreviousCircleOutline} {...props} />;
}

export { mdiSkipPreviousCircleOutline as path };
