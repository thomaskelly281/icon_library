import { mdiTimeline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Timeline(props: IconComponentProps) {
  return <Icon path={mdiTimeline} {...props} />;
}

export { mdiTimeline as path };
