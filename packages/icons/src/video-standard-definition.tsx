import { mdiVideoStandardDefinition } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoStandardDefinition(props: IconComponentProps) {
  return <Icon path={mdiVideoStandardDefinition} {...props} />;
}

export { mdiVideoStandardDefinition as path };
