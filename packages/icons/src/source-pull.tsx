import { mdiSourcePull } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SourcePull(props: IconComponentProps) {
  return <Icon path={mdiSourcePull} {...props} />;
}

export { mdiSourcePull as path };
