import { mdiMicrosoftEdge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MicrosoftEdge(props: IconComponentProps) {
  return <Icon path={mdiMicrosoftEdge} {...props} />;
}

export { mdiMicrosoftEdge as path };
