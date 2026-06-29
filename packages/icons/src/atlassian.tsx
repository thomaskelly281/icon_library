import { mdiAtlassian } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Atlassian(props: IconComponentProps) {
  return <Icon path={mdiAtlassian} {...props} />;
}

export { mdiAtlassian as path };
