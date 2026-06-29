import { mdiHeadLightbulb } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadLightbulb(props: IconComponentProps) {
  return <Icon path={mdiHeadLightbulb} {...props} />;
}

export { mdiHeadLightbulb as path };
