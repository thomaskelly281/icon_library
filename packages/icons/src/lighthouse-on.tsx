import { mdiLighthouseOn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LighthouseOn(props: IconComponentProps) {
  return <Icon path={mdiLighthouseOn} {...props} />;
}

export { mdiLighthouseOn as path };
